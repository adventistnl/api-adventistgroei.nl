import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { SubsidyRequestRepository } from '../repositories/subsidy-request.repository';
import { SubsidyRequestItemRepository } from '../repositories/subsidy-request-item.repository';
import { SubsidyStatusHistoryRepository } from '../repositories/subsidy-status-history.repository';
import { SubsidyReceiptRepository } from '../repositories/subsidy-receipt.repository';
import { SubsidyRequest } from '../@generated/subsidy-request/subsidy-request.model';
import { SubsidyRequestCreateDto, SubsidyRequestUpdateDto, CreateWithoutDocumentSubsidyRequestDto } from '../dto/subsidy-request.dto';
import { SubsidyRequestItemInput } from '../dto/subsidy-request-item.dto';
import { SubsidyKPIs, SubsidyByDepartment, SubsidyByMonth } from '../dto/subsidy-analytics.dto';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { PrismaService } from './prisma.service';
import { GoogleDriveService } from './google-drive.service';
import { format } from 'date-fns';

import { SubsidyHistoryType } from '../@generated/prisma/subsidy-history-type.enum';
import { SubsidyRequestType } from '../@generated/prisma/subsidy-request-type.enum';
import { ProjectHistoryService } from './project-history.service';
import { ProjectHistoryType } from '../@generated/prisma/project-history-type.enum';
import { AnnualBudgetService } from './annual-budget.service';
import { DecimalHelper } from '../common/helpers/decimal.helper';
import { SubsidyReceiptService } from './subsidy-receipt.service';
import { EmailService } from './email.service';
import { translate } from '../../i18n.config';
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';
import { ProjectCollaborator, CollaboratorRole } from '../models';
import { User } from '../@generated/user/user.model';

@Injectable()
export class SubsidyRequestService {
  constructor(
    private readonly subsidyRequestRepository: SubsidyRequestRepository,
    private readonly subsidyRequestItemRepository: SubsidyRequestItemRepository,
    private readonly historyRepository: SubsidyStatusHistoryRepository,
    private readonly subsidyReceiptRepository: SubsidyReceiptRepository,
    private readonly prisma: PrismaService,
    private readonly driveService: GoogleDriveService,
    private readonly annualBudgetService: AnnualBudgetService,
    @Inject(forwardRef(() => SubsidyReceiptService))
    private readonly subsidyReceiptService: SubsidyReceiptService,
    private readonly emailService: EmailService,
    private readonly projectHistoryService: ProjectHistoryService,
  ) {}

  private validateStatusTransition(currentStatusName: string | undefined, newStatusName: string, language: LanguagePreference = LanguagePreference.en) {
      if (!currentStatusName) return;

      const from = currentStatusName.toUpperCase();
      const to = newStatusName.toUpperCase();

      // Rule 0: DRAFT can only move to PENDING (submit) or stay as DRAFT
      if (from === 'DRAFT' && to !== 'PENDING' && from !== to) {
          throw new CustomGraphQLError(
              translate('errors.invalid_transition_from_draft', language, { ns: 'subsidy', to }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_FROM_DRAFT' } }
          );
      }

      // Rule 1: Closed status cannot be changed to anything else
      if (from === 'CLOSED' && from !== to) {
          throw new CustomGraphQLError(
              translate('errors.status_is_closed', language, { ns: 'subsidy' }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'STATUS_IS_CLOSED' } }
          );
      }

      // Rule 2: In Review -> Closed Not Allowed directly
      if (from === 'IN_REVIEW' && to === 'CLOSED') {
           throw new CustomGraphQLError(
              translate('errors.invalid_transition_in_review_to_closed', language, { ns: 'subsidy' }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_IN_REVIEW_TO_CLOSED' } }
          );
      }

      // Rule: Only APPROVED can go to ADVANCED_CLOSED or WAITING_DOCUMENTS
      if (to === 'ADVANCED_CLOSED' && from !== 'APPROVED') {
          throw new CustomGraphQLError(
              translate('errors.invalid_transition_to_advanced_closed', language, { ns: 'subsidy', from }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_TO_ADVANCED_CLOSED' } }
          );
      }

      // Rule: Only APPROVED or ADVANCED_CLOSED can go to WAITING_DOCUMENTS
      if (to === 'WAITING_DOCUMENTS' && from !== 'APPROVED' && from !== 'ADVANCED_CLOSED') {
          throw new CustomGraphQLError(
              translate('errors.invalid_transition_final_state', language, { ns: 'subsidy', from, to }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_TO_WAITING_DOCUMENTS' } }
          );
      }

      // Rule 3: ADVANCED_CLOSED can go to CLOSED, WAITING_REFUND or WAITING_DOCUMENTS
      if (from === 'ADVANCED_CLOSED' && to !== 'CLOSED' && to !== 'WAITING_REFUND' && to !== 'WAITING_DOCUMENTS' && from !== to) {
           throw new CustomGraphQLError(
              translate('errors.invalid_transition_advanced_closed', language, { ns: 'subsidy', to }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_FROM_ADVANCED_CLOSED' } }
          );
      }

      // Rule: WAITING_DOCUMENTS can go to CLOSED or WAITING_REFUND (after documents validated)
      if (from === 'WAITING_DOCUMENTS' && to !== 'CLOSED' && to !== 'WAITING_REFUND' && from !== to) {
           throw new CustomGraphQLError(
              translate('errors.invalid_transition_final_state', language, { ns: 'subsidy', from, to }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_FROM_WAITING_DOCUMENTS' } }
          );
      }

      // Rule 4: APPROVED can go to CLOSED, ADVANCED_CLOSED (legacy), WAITING_DOCUMENTS (advance paid) or WAITING_REFUND (refund needed)
      if (from === 'APPROVED' && to !== 'CLOSED' && to !== 'ADVANCED_CLOSED' && to !== 'WAITING_DOCUMENTS' && to !== 'WAITING_REFUND' && from !== to) {
           throw new CustomGraphQLError(
              translate('errors.invalid_transition_final_state', language, { ns: 'subsidy', from, to }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_FINAL_STATE' } }
          );
      }

      // Rule 5: WAITING_REFUND can only go to CLOSED (when refund is confirmed)
      if (from === 'WAITING_REFUND' && to !== 'CLOSED' && from !== to) {
           throw new CustomGraphQLError(
              translate('errors.invalid_transition_final_state', language, { ns: 'subsidy', from, to }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_FINAL_STATE' } }
          );
      }

      // Rule 6: REJECTED can only go to CLOSED
      if (from === 'REJECTED' && to !== 'CLOSED' && from !== to) {
           throw new CustomGraphQLError(
              translate('errors.invalid_transition_final_state', language, { ns: 'subsidy', from, to }),
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'INVALID_TRANSITION_FINAL_STATE' } }
          );
      }
  }

  private ensureNotClosed(statusName: string | undefined, language: LanguagePreference = LanguagePreference.en) {
    if (statusName?.toUpperCase() === 'CLOSED') {
      throw new CustomGraphQLError(
        translate('errors.action_not_allowed_closed', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'STATUS_IS_CLOSED' } }
      );
    }
  }

  /**
   * Check if user has FINANCIAL_MANAGER role
   */
  private async userHasFinancialRole(userId: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        user_roles: {
          where: { is_deleted: false },
          include: {
            role: {
              select: { key_code: true }
            }
          }
        }
      }
    });

    if (!user) return false;

    const userRoles = user.user_roles.map(ur => ur.role.key_code);
    return userRoles.includes('FINANCIAL_MANAGER');
  }

  private async ensureAllDocumentsValidated(id: string, language: LanguagePreference = LanguagePreference.en) {
    const pendingReceipts = await this.prisma.subsidyReceipt.count({
      where: {
        subsidy_request_id: id,
        is_deleted: false,
        is_validated: false 
      }
    });

    if (pendingReceipts > 0) {
       throw new CustomGraphQLError(
        translate('errors.documents_not_validated', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'DOCUMENTS_NOT_VALIDATED' } }
      );
    }
  }

  /**
   * Validates that ALL documents are approved (not just validated).
   * This blocks approval of subsidy if any document was rejected.
   */
  private async ensureAllDocumentsApproved(id: string, language: LanguagePreference = LanguagePreference.en) {
    const receipts = await this.prisma.subsidyReceipt.findMany({
      where: {
        subsidy_request_id: id,
        is_deleted: false,
      },
      select: {
        is_validated: true,
        approved: true,
      }
    });

    // Check for any pending (not validated) documents
    const pendingCount = receipts.filter(r => !r.is_validated).length;
    if (pendingCount > 0) {
      throw new CustomGraphQLError(
        translate('errors.documents_pending_validation', language, { ns: 'subsidy', count: pendingCount }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'DOCUMENTS_NOT_VALIDATED' } }
      );
    }

    // Check for any rejected documents
    const rejectedCount = receipts.filter(r => r.is_validated && !r.approved).length;
    if (rejectedCount > 0) {
      throw new CustomGraphQLError(
        translate('errors.documents_rejected', language, { ns: 'subsidy', count: rejectedCount }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'DOCUMENTS_REJECTED' } }
      );
    }
  }

  /**
   * Validates that the sum of all subsidy allocations for each activity does not exceed
   * the activity's total budget_amount.
   *
   * Example: Activity budget = €2000
   *   - Subsidy A requests €1000 → OK (total: €1000)
   *   - Subsidy B requests €1000 → OK (total: €2000)
   *   - Subsidy C requests €100  → BLOCKED (total: €2100 > €2000)
   *
   * @param items               Items being submitted in the new/updated subsidy request
   * @param language            Language for i18n error messages
   * @param excludeSubsidyId    When updating, exclude the current subsidy's own items from the cap check
   */
  private async validateActivityBudgetCap(
    items: SubsidyRequestItemInput[],
    language: LanguagePreference = LanguagePreference.en,
    excludeSubsidyId?: string,
  ): Promise<void> {
    for (const item of items) {
      if (!item.project_activity_id || !(item.requested_amount > 0)) continue;

      const activity = await this.prisma.projectActivity.findUnique({
        where: { id: item.project_activity_id, is_deleted: false },
        select: { id: true, name: true, budget_amount: true },
      });

      if (!activity) {
        throw new CustomGraphQLError(
          translate('errors.activity_not_found_for_item', language, {
            ns: 'subsidy',
            activityId: item.project_activity_id,
          }),
          ErrorCode.NOT_FOUND,
          404,
          { additional: { errorCode: 'ACTIVITY_NOT_FOUND', activityId: item.project_activity_id } },
        );
      }

      const budgetAmount = Number(activity.budget_amount);

      // Sum all non-rejected, non-deleted items for this activity across other subsidies
      const existingItems = await this.prisma.subsidyRequestItem.findMany({
        where: {
          project_activity_id: item.project_activity_id,
          is_deleted: false,
          ...(excludeSubsidyId ? { subsidy_request_id: { not: excludeSubsidyId } } : {}),
          subsidy_request: {
            is_deleted: false,
            // T5: Exclude CLOSED and ADVANCED_CLOSED — subsidies that are finished
            // should not block new requests for the same activity.
            subsidy_status: {
              name: { notIn: ['REJECTED', 'CLOSED', 'ADVANCED_CLOSED'] },
            },
          },
        },
        select: { requested_amount: true },
      });

      const alreadyAllocated = existingItems.reduce(
        (sum, i) => sum + Number(i.requested_amount),
        0,
      );

      const requestedAmount = Number(item.requested_amount);
      const remaining = budgetAmount - alreadyAllocated;

      if (requestedAmount > remaining) {
        throw new CustomGraphQLError(
          translate('errors.activity_budget_cap_exceeded', language, {
            ns: 'subsidy',
            activityName: activity.name,
            budget: budgetAmount,
            allocated: alreadyAllocated,
            requested: requestedAmount,
            remaining: Math.max(0, remaining),
          }),
          ErrorCode.BAD_REQUEST,
          400,
          {
            additional: {
              errorCode: 'ACTIVITY_BUDGET_CAP_EXCEEDED',
              activityId: activity.id,
              activityName: activity.name,
              budget: budgetAmount,
              allocated: alreadyAllocated,
              requested: requestedAmount,
              remaining: Math.max(0, remaining),
            },
          },
        );
      }
    }
  }

  async create(data: SubsidyRequestCreateDto, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    const resolvedType = data.request_type ?? SubsidyRequestType.WITH_DOCUMENT;

    console.log('🟡 [SubsidyRequestService.create] START', {
      userId,
      resolvedType,
      project_id: data.project_id,
      department_id: data.department_id,
      institution_id: data.institution_id,
      requester_id: data.requester_id,
      items_count: data.items?.length ?? 0,
      items: data.items?.map(i => ({
        project_activity_id: i.project_activity_id,
        requested_amount: i.requested_amount,
        linked_docs: i.linked_activity_document_ids?.length ?? 0,
      })),
    });

    // Se subsidy_status_id não foi fornecido, buscar status inicial automaticamente
    if (!data.subsidy_status_id) {
      const initialStatusName = data.start_as_draft ? 'DRAFT' : 'PENDING';
      const initialStatus = await this.prisma.subsidyStatus.findFirst({
        where: { name: initialStatusName, is_deleted: false },
      });

      if (!initialStatus) {
        const errorKey = data.start_as_draft ? 'errors.draft_status_not_found' : 'errors.pending_status_not_found';
        throw new CustomGraphQLError(
          translate(errorKey, language, { ns: 'subsidy' }),
          ErrorCode.NOT_FOUND,
          404
        );
      }

      data.subsidy_status_id = initialStatus.id;
    }

    console.log('🟡 [SubsidyRequestService.create] Calling repository.create with subsidy_status_id:', data.subsidy_status_id);

    // Validate ADVANCE limits (frontend uses create() for ADVANCE too)
    if (resolvedType === SubsidyRequestType.ADVANCE) {
      const project = await this.prisma.project.findUnique({
        where: { id: data.project_id },
        select: { subsidized_budget: true }
      });
      if (!project) throw new CustomGraphQLError('Project not found', ErrorCode.NOT_FOUND, 404);

      // T1/T2: Exclude CLOSED and ADVANCED_CLOSED subsidies — they are no longer active
      // and should not count against the available budget or the 50% advance cap.
      const INACTIVE_STATUSES = ['REJECTED', 'CLOSED', 'ADVANCED_CLOSED'];

      const existingSubsidies = await this.prisma.subsidyRequest.findMany({
        where: {
          project_id: data.project_id,
          is_deleted: false,
          subsidy_status: { name: { notIn: INACTIVE_STATUSES } },
        }
      });

      const totalRequested = existingSubsidies.reduce((sum, req) => sum + Number(req.total_budget || 0), 0);
      const availableBudget = Math.max(0, Number(project.subsidized_budget || 0) - totalRequested);
      
      const maxAdvanceAllowed = Number(project.subsidized_budget || 0) * 0.5;
      const advanceRequested = Number(data.advance_amount || data.total_budget || 0);

      if (advanceRequested > availableBudget) {
         throw new CustomGraphQLError(
           translate('errors.advance_exceeds_available', language, {
             ns: 'subsidy',
             requested: advanceRequested,
             available: availableBudget,
             subsidizedBudget: Number(project.subsidized_budget || 0),
             totalRequested,
           }),
           ErrorCode.BAD_REQUEST,
           400,
           {
             additional: {
               errorCode: 'ADVANCE_EXCEEDS_AVAILABLE',
               requested: advanceRequested,
               available: availableBudget,
               subsidizedBudget: Number(project.subsidized_budget || 0),
               totalRequested,
             },
           }
         );
      }

      // T3: Use only advance_amount (not total_budget as fallback) to avoid inflating
      // the sum with non-advance subsidies that have null advance_amount.
      const existingAdvancesSum = existingSubsidies
         .filter(s => s.is_for_advance || s.request_type === SubsidyRequestType.ADVANCE)
         .reduce((sum, req) => sum + Number(req.advance_amount || 0), 0);
         
      if (existingAdvancesSum + advanceRequested > maxAdvanceAllowed) {
         throw new CustomGraphQLError(
           translate('errors.advance_exceeds_limit', language, {
             ns: 'subsidy',
             requested: advanceRequested,
             max: maxAdvanceAllowed,
             subsidizedBudget: Number(project.subsidized_budget || 0),
             existing: existingAdvancesSum,
           }),
           ErrorCode.BAD_REQUEST,
           400,
           {
             additional: {
               errorCode: 'ADVANCE_EXCEEDS_LIMIT',
               requested: advanceRequested,
               max: maxAdvanceAllowed,
               subsidizedBudget: Number(project.subsidized_budget || 0),
               existing: existingAdvancesSum,
             },
           }
         );
      }
    }

    let subsidyRequest: SubsidyRequest;
    try {
      // Validate activity budget cap for each item before persisting
      if (data.items && data.items.length > 0) {
        await this.validateActivityBudgetCap(data.items, language);
      }

      subsidyRequest = await this.subsidyRequestRepository.create(data, userId);
    } catch (repoError) {
      console.error('🔴 [SubsidyRequestService.create] repository.create FAILED:', {
        message: repoError?.message,
        code: repoError?.code,
        meta: repoError?.meta,
        stack: repoError?.stack,
      });
      throw repoError;
    }

    console.log('🟢 [SubsidyRequestService.create] repository.create OK — id:', subsidyRequest.id);

    // Create initial history record
    await this.historyRepository.create({
      subsidy_request_id: subsidyRequest.id,
      status_id: data.subsidy_status_id,
      previous_status_id: undefined,
      type: SubsidyHistoryType.STATUS_CHANGE,
      reason: translate(
        data.start_as_draft ? 'history.request_created_as_draft' : 'history.request_created',
        language,
        { ns: 'subsidy' },
      ),
      changed_by: userId,
    });

    // Processar documentos linkados apenas para WITH_DOCUMENT
    if (resolvedType === SubsidyRequestType.WITH_DOCUMENT && data.items && data.items.length > 0) {
      const createdItems = await this.subsidyRequestItemRepository.findBySubsidyRequestId(subsidyRequest.id);

      for (const itemInput of data.items) {
        if (itemInput.linked_activity_document_ids && itemInput.linked_activity_document_ids.length > 0) {
          const createdItem = createdItems.find(
            (ci) => ci.project_activity_id === itemInput.project_activity_id
          );

          if (createdItem) {
            for (let i = 0; i < itemInput.linked_activity_document_ids.length; i++) {
              const docId = itemInput.linked_activity_document_ids[i];
              const docAmount = itemInput.linked_document_amounts?.[i] || 0;

              await this.subsidyReceiptService.createFromActivityDocument(
                userId,
                subsidyRequest.id,
                docId,
                itemInput.project_activity_id,
                createdItem.id,
                docAmount
              );
            }
          }
        }
      }

      // Validar que a soma dos comprovantes bate com o valor solicitado de cada item
      for (const itemInput of data.items) {
        const documentAmountsSum = (itemInput.linked_document_amounts || []).reduce((sum, amount) => sum + amount, 0);

        if (documentAmountsSum > 0 && Math.abs(documentAmountsSum - itemInput.requested_amount) > 0.01) {
          throw new CustomGraphQLError(
            translate('errors.document_amounts_mismatch', language, { ns: 'subsidy', sum: documentAmountsSum, requested: itemInput.requested_amount }),
            ErrorCode.VALIDATION_ERROR,
            400
          );
        }
      }
    }

    console.log('🟢 [SubsidyRequestService.create] DONE — returning id:', subsidyRequest.id, 'request_type:', resolvedType);
    return subsidyRequest;
  }

  /**
   * Criar subsídio do tipo WITHOUT_DOCUMENT.
   * Vinculado a atividades, mas sem comprovante de documento.
   * Fica com pendência de receipt (equivalente ao ADVANCE nesse sentido).
   * Se institution_id não for fornecido, é derivado do projeto automaticamente.
   */
  async createWithoutDocumentRequest(
    data: CreateWithoutDocumentSubsidyRequestDto,
    userId: string,
    language: LanguagePreference = LanguagePreference.en
  ): Promise<SubsidyRequest> {
    let institutionId = data.institution_id;

    // Derivar institution_id do projeto se não fornecido
    if (!institutionId) {
      const project = await this.prisma.project.findUnique({
        where: { id: data.project_id, is_deleted: false },
        select: { institution_id: true },
      });

      if (!project) {
        throw new CustomGraphQLError(
          translate('errors.project_not_found', language, { ns: 'subsidy' }),
          ErrorCode.NOT_FOUND,
          404
        );
      }

      if (!project.institution_id) {
        throw new CustomGraphQLError(
          translate('errors.project_has_no_institution', language, { ns: 'subsidy' }),
          ErrorCode.BAD_REQUEST,
          400
        );
      }

      institutionId = project.institution_id;
    }

    console.log('🟡 [SubsidyRequestService.createWithoutDocumentRequest] START', {
      project_id: data.project_id,
      institution_id: institutionId,
      department_id: data.department_id,
      items_count: data.items?.length ?? 0,
    });

    const createDto: SubsidyRequestCreateDto = {
      ...data,
      institution_id: institutionId,
      request_type: SubsidyRequestType.WITHOUT_DOCUMENT,
      is_for_advance: false,
    };
    return this.create(createDto, userId, language);
  }

  /**
   * Create an advance request for a project.
   * Advance requests:
   * - Have is_for_advance = true
   * - Cannot exceed 50% of subsidized_budget
   * - Do not require document uploads
   * - Start with PENDING status
   */
  async createAdvanceRequest(
    projectId: string,
    advanceAmount: number,
    userId: string,
    language: LanguagePreference = LanguagePreference.en
  ): Promise<SubsidyRequest> {
    // Fetch project with its subsidized budget
    const project = await this.prisma.project.findUnique({
      where: { id: projectId, is_deleted: false },
      select: {
        id: true,
        title: true,
        subsidized_budget: true,
        institution_id: true,
        department_id: true,
        church_id: true,
        created_by: true,
      }
    });

    if (!project) {
      throw new CustomGraphQLError(
        translate('errors.project_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    if (advanceAmount <= 0) {
      throw new CustomGraphQLError(
        translate('errors.advance_amount_invalid', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'ADVANCE_AMOUNT_INVALID' } }
      );
    }

    // T4: Validate advance amount against both the 50% cap AND existing active advance requests.
    // Inactive subsidies (CLOSED, ADVANCED_CLOSED, REJECTED) must not count.
    const INACTIVE_STATUSES = ['REJECTED', 'CLOSED', 'ADVANCED_CLOSED'];
    const maxAdvance = Number(project.subsidized_budget || 0) * 0.5;
    const subsidizedBudget = Number(project.subsidized_budget || 0);

    const existingAdvances = await this.prisma.subsidyRequest.findMany({
      where: {
        project_id: projectId,
        is_deleted: false,
        subsidy_status: { name: { notIn: INACTIVE_STATUSES } },
        OR: [
          { is_for_advance: true },
          { request_type: SubsidyRequestType.ADVANCE },
        ],
      },
      select: { advance_amount: true },
    });

    const existingAdvancesSum = existingAdvances.reduce(
      (sum, req) => sum + Number(req.advance_amount || 0),
      0,
    );

    if (advanceAmount > maxAdvance) {
      throw new CustomGraphQLError(
        translate('errors.advance_exceeds_limit', language, {
          ns: 'subsidy',
          requested: advanceAmount,
          max: maxAdvance,
          subsidizedBudget,
          existing: 0,
        }),
        ErrorCode.BAD_REQUEST,
        400,
        {
          additional: {
            errorCode: 'ADVANCE_EXCEEDS_LIMIT',
            requested: advanceAmount,
            max: maxAdvance,
            subsidizedBudget,
          },
        }
      );
    }

    if (existingAdvancesSum + advanceAmount > maxAdvance) {
      throw new CustomGraphQLError(
        translate('errors.advance_exceeds_limit', language, {
          ns: 'subsidy',
          requested: advanceAmount,
          max: maxAdvance,
          subsidizedBudget,
          existing: existingAdvancesSum,
        }),
        ErrorCode.BAD_REQUEST,
        400,
        {
          additional: {
            errorCode: 'ADVANCE_EXCEEDS_LIMIT',
            requested: advanceAmount,
            max: maxAdvance,
            subsidizedBudget,
            existing: existingAdvancesSum,
          },
        }
      );
    }

    // Find PENDING status
    const pendingStatus = await this.prisma.subsidyStatus.findFirst({
      where: { name: 'PENDING', is_deleted: false },
    });

    if (!pendingStatus) {
      throw new CustomGraphQLError(
        translate('errors.pending_status_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Create the advance request
    const subsidyRequest = await this.prisma.subsidyRequest.create({
      data: {
        description: `Advance request for project: ${project.title}`,
        total_budget: advanceAmount,
        is_for_advance: true,
        advance_amount: advanceAmount,
        institution_id: project.institution_id!,
        department_id: project.department_id,
        church_id: project.church_id ?? undefined,
        project_id: projectId,
        requester_id: userId,
        subsidy_statuses_id: pendingStatus.id,
        request_type: SubsidyRequestType.ADVANCE,
        created_by: userId,
        updated_by: userId,
      },
      include: {
        subsidy_status: true,
        institution: true,
        department: true,
        church: true,
        project: true,
        requester: true,
      }
    });

    // Create initial history record
    await this.historyRepository.create({
      subsidy_request_id: subsidyRequest.id,
      status_id: pendingStatus.id,
      previous_status_id: undefined,
      type: SubsidyHistoryType.STATUS_CHANGE,
      reason: translate('history.subsidy_created_advance', language, { ns: 'subsidy', amount: advanceAmount }),
      changed_by: userId,
    });

    return subsidyRequest;
  }

  async update(id: string, data: SubsidyRequestUpdateDto, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Get current subsidy to check if status changed


    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Checking if currently closed
    this.ensureNotClosed(current.subsidy_status?.name, language);

    // Block modifying structural values if the request is past the review stage.
    // Note: WAITING_DOCUMENTS is intentionally excluded from the structural edit guard because
    // the entire purpose of that status is for the user to submit receipt documents (items).
    const isEditingStructuralValues = data.total_budget !== undefined || data.description !== undefined || data.advance_amount !== undefined;
    const isEditingItems = !!(data.items && data.items.length > 0);

    if (isEditingStructuralValues || isEditingItems) {
      const isRequester = current.requester_id === userId || current.created_by === userId;
      let isOwnerOrCoOwner = false;
      
      const project = await this.prisma.project.findUnique({
        where: { id: current.project_id },
        select: { owner_id: true, co_owner_id: true }
      });
      
      if (project) {
        isOwnerOrCoOwner = project.owner_id === userId || project.co_owner_id === userId;
      }
      
      const userObj = await this.prisma.user.findUnique({ where: { id: userId }, include: { user_roles: { include: { role: true } } } });
      const isAdmin = userObj?.user_roles.some(r => r.role.key_code === 'ADMIN' || r.role.key_code === 'DEV');
      
      if (!isRequester && !isOwnerOrCoOwner && !isAdmin) {
        throw new CustomGraphQLError(
          translate('errors.forbidden', language, { ns: 'common' }) || 'You do not have permission to edit this subsidy request.',
          ErrorCode.FORBIDDEN,
          403
        );
      }
    }

    const currentStatusName = current.subsidy_status?.name?.toUpperCase();

    // Structural fields (budget, description, advance_amount) are locked after review
    if (isEditingStructuralValues) {
      const allowedStatusesToEditStructure = ['PENDING', 'IN_REVIEW', 'REJECTED', 'ADJUSTMENTS_NEEDED'];
      if (currentStatusName && !allowedStatusesToEditStructure.includes(currentStatusName)) {
        throw new CustomGraphQLError(
          translate('errors.action_not_allowed_closed', language, { ns: 'subsidy' }) || 'Editing values is not allowed for approved requests.',
          ErrorCode.BAD_REQUEST,
          400,
          { additional: { errorCode: 'EDIT_NOT_ALLOWED_FOR_STATUS' } }
        );
      }
    }

    // Items (receipt documents) can be submitted in WAITING_DOCUMENTS as well
    if (isEditingItems) {
      const allowedStatusesToEditItems = ['PENDING', 'IN_REVIEW', 'REJECTED', 'ADJUSTMENTS_NEEDED', 'WAITING_DOCUMENTS'];
      if (currentStatusName && !allowedStatusesToEditItems.includes(currentStatusName)) {
        throw new CustomGraphQLError(
          translate('errors.action_not_allowed_closed', language, { ns: 'subsidy' }) || 'Editing values is not allowed for approved requests.',
          ErrorCode.BAD_REQUEST,
          400,
          { additional: { errorCode: 'EDIT_NOT_ALLOWED_FOR_STATUS' } }
        );
      }
    }

    // If status is being changed, validate BEFORE the update
    if (data.subsidy_status_id && data.subsidy_status_id !== current.subsidy_statuses_id) {
      const newStatus = await this.prisma.subsidyStatus.findUnique({ where: { id: data.subsidy_status_id } });
      
      if (newStatus) {
        // Validate status transition
        this.validateStatusTransition(current.subsidy_status?.name, newStatus.name, language);
        
        const targetName = newStatus.name.toUpperCase();
        const currentRequestType = (current as any).request_type as SubsidyRequestType | undefined;
        const requiresDocValidation = !currentRequestType || currentRequestType === SubsidyRequestType.WITH_DOCUMENT;

        // Validate documents for terminal states apenas para WITH_DOCUMENT
        if (requiresDocValidation && ['APPROVED', 'REJECTED', 'CLOSED'].includes(targetName)) {
          await this.ensureAllDocumentsValidated(id, language);
        }

        // Transitioning to WAITING_REFUND: ensure refund_amount is already set on the record
        // (set by the prior requestRefund mutation before this status update is triggered)
        if (targetName === 'WAITING_REFUND') {
          const existingRefundAmount = (current as any).refund_amount;
          if (!existingRefundAmount || Number(existingRefundAmount) <= 0) {
            throw new CustomGraphQLError(
              translate('errors.refund_amount_required', language, { ns: 'subsidy' }) ||
              'refund_amount must be set before transitioning to WAITING_REFUND',
              ErrorCode.BAD_REQUEST,
              400,
              { additional: { errorCode: 'REFUND_AMOUNT_REQUIRED' } }
            );
          }
        }
        
        // Only FINANCIAL_MANAGER can close a subsidy request - MUST be checked BEFORE update
        if (targetName === 'CLOSED' || targetName === 'ADVANCED_CLOSED' || targetName === 'WAITING_DOCUMENTS') {
          const hasFinancialRole = await this.userHasFinancialRole(userId);
          if (!hasFinancialRole) {
            throw new CustomGraphQLError(
              translate('errors.only_financial_can_close', language, { ns: 'subsidy' }),
              ErrorCode.FORBIDDEN,
              403,
              { additional: { errorCode: 'ONLY_FINANCIAL_CAN_CLOSE' } }
            );
          }
        }

        // FINANCIAL_MANAGER cannot change status on pre-approved subsidies (PENDING, IN_REVIEW)
        // Finance can only act AFTER the subsidy has been APPROVED
        const preApprovedStatuses = ['PENDING', 'IN_REVIEW'];
        if (preApprovedStatuses.includes(currentStatusName!)) {
          const hasFinancialRole = await this.userHasFinancialRole(userId);
          if (hasFinancialRole) {
            throw new CustomGraphQLError(
              translate('errors.financial_cannot_act_before_approval', language, { ns: 'subsidy' }),
              ErrorCode.FORBIDDEN,
              403,
              { additional: { errorCode: 'FINANCIAL_CANNOT_ACT_BEFORE_APPROVAL' } }
            );
          }
        }

      }
    }

    // Capture existing activities for history diff (only for advance requests)
    let existingActivityIds: string[] = [];
    if (current.is_for_advance) {
      existingActivityIds = (current as any).items?.map((i: any) => i.project_activity_id) || [];
    }

    // Validate activity budget cap before persisting updated items
    if (data.items && data.items.length > 0) {
      await this.validateActivityBudgetCap(data.items, language, id);
    }

    const result = await this.subsidyRequestRepository.update(id, data, userId);

    // Check for newly linked activities to log history (Advance Subsidy only)
    if (current.is_for_advance && data.items) {
      const newActivityIds = data.items.map(i => i.project_activity_id);
      const addedActivityIds = newActivityIds.filter(id => !existingActivityIds.includes(id));

      if (addedActivityIds.length > 0) {
        // Fetch names for logging
        const activities = await this.prisma.projectActivity.findMany({
          where: { id: { in: addedActivityIds } },
          select: { id: true, name: true }
        });

        for (const activity of activities) {
          await this.historyRepository.create({
            subsidy_request_id: id,
            status_id: current.subsidy_statuses_id,
            type: SubsidyHistoryType.STATUS_CHANGE, 
            reason: translate('history.activity_linked_to_advance', language, { 
              ns: 'subsidy', 
              activityName: activity.name 
            }),
            changed_by: userId,
          });
        }
      }
    }

    // Processar documentos linkados apenas para WITH_DOCUMENT
    const currentRequestTypeForUpdate = (current as any).request_type as SubsidyRequestType | undefined;
    const isWithDocument = !currentRequestTypeForUpdate || currentRequestTypeForUpdate === SubsidyRequestType.WITH_DOCUMENT;

    if (isWithDocument && data.items && data.items.length > 0) {
      // Fetch created items to get their IDs
      const createdItems = await this.subsidyRequestItemRepository.findBySubsidyRequestId(id);
      
      for (const itemInput of data.items) {
        if (itemInput.linked_activity_document_ids && itemInput.linked_activity_document_ids.length > 0) {
          const createdItem = createdItems.find(
            (ci) => ci.project_activity_id === itemInput.project_activity_id
          );

          if (createdItem) {
            for (let i = 0; i < itemInput.linked_activity_document_ids.length; i++) {
              const docId = itemInput.linked_activity_document_ids[i];
              const docAmount = itemInput.linked_document_amounts?.[i] || 0;
              
              await this.subsidyReceiptService.createFromActivityDocument(
                userId,
                id,
                docId,
                itemInput.project_activity_id,
                createdItem.id,
                docAmount
              );
            }

          }
        }
      }
    }

    // Validate that the sum of receipt amounts matches the requested amount for each item
    // Only for WITH_DOCUMENT type
    if (isWithDocument && data.items && data.items.length > 0) {
      const createdItems = await this.subsidyRequestItemRepository.findBySubsidyRequestId(id);
      
      for (const itemInput of data.items) {
        const createdItem = createdItems.find(
          (ci) => ci.project_activity_id === itemInput.project_activity_id
        );

        if (createdItem) {
          // Fetch all receipts for this item
          const itemReceipts = await this.subsidyReceiptRepository.findBySubsidyRequestItemId(createdItem.id);
          const totalReceiptAmount = itemReceipts
            .filter(r => !r.is_deleted)
            .reduce((sum, receipt) => sum + Number(receipt.amount), 0);

          // Check if sum matches requested amount
          if (totalReceiptAmount > 0 && Math.abs(totalReceiptAmount - itemInput.requested_amount) > 0.01) {
            throw new CustomGraphQLError(
              `The sum of document amounts (${totalReceiptAmount}) does not match the requested amount (${itemInput.requested_amount}) for the activity`,
              ErrorCode.VALIDATION_ERROR,
              400
            );
          }
        }
      }
    }

    // If status changed, create history record
    if (data.subsidy_status_id && data.subsidy_status_id !== current.subsidy_statuses_id) {
      // Fetch status names for better history message
      const [previousStatus, newStatus] = await Promise.all([
        this.prisma.subsidyStatus.findUnique({ where: { id: current.subsidy_statuses_id } }),
        this.prisma.subsidyStatus.findUnique({ where: { id: data.subsidy_status_id } })
      ]);

      // Translate status names using status key (name is like PENDING, IN_REVIEW, etc.)
      const previousStatusKey = previousStatus?.name?.toLowerCase().replace(' ', '_') || 'unknown';
      const newStatusKey = newStatus?.name?.toLowerCase().replace(' ', '_') || 'unknown';
      const previousStatusName = translate(`status.${previousStatusKey}`, language, { ns: 'subsidy' });
      const newStatusName = translate(`status.${newStatusKey}`, language, { ns: 'subsidy' });
      const reason = data.notes || translate('history.status_changed', language, { ns: 'subsidy', from: previousStatusName, to: newStatusName });

      await this.historyRepository.create({
        subsidy_request_id: id,
        status_id: data.subsidy_status_id,
        previous_status_id: current.subsidy_statuses_id,
        type: SubsidyHistoryType.STATUS_CHANGE,
        reason,
        changed_by: userId,
      });

      const prevName = previousStatus?.name?.toUpperCase();
      const nextName = newStatus?.name?.toUpperCase();

      // ── CLOSED ────────────────────────────────────────────────────────────────
      if (nextName === 'CLOSED') {
        const fullRequest = await this.prisma.subsidyRequest.findUnique({
          where: { id },
          select: { department_id: true, approved_amount: true, total_budget: true, request_type: true }
        });

        if (fullRequest?.department_id) {
          if (prevName === 'REJECTED') {
            // REJECTED → CLOSED: no budget change needed.
            // The project's ALLOCATION_RESERVED covers all subsidy requests in aggregate;
            // individual subsidies never create their own ALLOCATION_RESERVED, so there
            // is nothing to release here. The project allocation remains intact.
          } else if (prevName === 'ADVANCED_CLOSED' || prevName === 'WAITING_REFUND' || prevName === 'WAITING_DOCUMENTS') {
            // Budget already handled (expense was recorded when transitioning INTO ADVANCED_CLOSED or WAITING_DOCUMENTS;
            // WAITING_REFUND→CLOSED refund is recorded separately below)
            // No additional BudgetTransaction needed here
          } else if (fullRequest.approved_amount) {
            // APPROVED → CLOSED (normal path, no refund): record expense
            await this.annualBudgetService.updateBudgetFinancials(
              fullRequest.department_id,
              new Date().getFullYear(),
              -Number(fullRequest.total_budget || 0), // Release allocation
              Number(fullRequest.approved_amount),    // Record as real expense
              userId,
              {
                type: 'EXPENSE_APPROVED',
                description: `Subsidy converted to actual expense`,
                subsidy_request_id: id
              }
            );
          }
        }
      }

      // ── ADVANCED_CLOSED ───────────────────────────────────────────────────────
      if (nextName === 'ADVANCED_CLOSED') {
        const fullRequest = await this.prisma.subsidyRequest.findUnique({
          where: { id },
          select: { department_id: true, advance_amount: true, total_budget: true, is_for_advance: true }
        });

        if (fullRequest?.department_id && fullRequest.advance_amount && fullRequest.is_for_advance) {
          await this.annualBudgetService.updateBudgetFinancials(
            fullRequest.department_id,
            new Date().getFullYear(),
            -Number(fullRequest.total_budget || 0), // Release allocation
            Number(fullRequest.advance_amount),      // Record advance as expense
            userId,
            {
              type: 'EXPENSE_APPROVED',
              description: `Advance subsidy converted to actual expense`,
              subsidy_request_id: id
            }
          );
        }
      }

      // ── WAITING_DOCUMENTS ─────────────────────────────────────────────────────
      // Triggered when a financial manager marks the advance as paid.
      // This is the moment the money leaves the account — record it as an Expense in the Ledger.
      if (nextName === 'WAITING_DOCUMENTS') {
        const fullRequest = await this.prisma.subsidyRequest.findUnique({
          where: { id },
          select: { department_id: true, advance_amount: true, total_budget: true, is_for_advance: true, approved_amount: true }
        });

        // Only apply the financial transaction if coming from APPROVED or ADVANCED_CLOSED,
        // and if not already recorded (ADVANCED_CLOSED already recorded it)
        if (fullRequest?.department_id && prevName !== 'ADVANCED_CLOSED') {
          const expenseAmt = fullRequest.advance_amount
            ? Number(fullRequest.advance_amount)
            : Number(fullRequest.approved_amount || 0);

          if (expenseAmt > 0) {
            await this.annualBudgetService.updateBudgetFinancials(
              fullRequest.department_id,
              new Date().getFullYear(),
              -Number(fullRequest.total_budget || 0), // Release allocation
              expenseAmt,                              // Record advance payment as expense
              userId,
              {
                type: 'EXPENSE_APPROVED',
                description: `Advance paid — waiting for receipt documents`,
                subsidy_request_id: id
              }
            );
          }
        }
      }

      // ── WAITING_REFUND ────────────────────────────────────────────────────────
      // Transition INTO WAITING_REFUND: record the expense for non-advance paths
      // (advances already recorded expense in ADVANCED_CLOSED; here we handle APPROVED→WAITING_REFUND)
      if (nextName === 'WAITING_REFUND') {
        const fullRequest = await this.prisma.subsidyRequest.findUnique({
          where: { id },
          select: {
            department_id: true,
            approved_amount: true,
            total_budget: true,
            refund_amount: true,
            refund_type: true,
            is_for_advance: true
          }
        });

        if (fullRequest?.department_id && fullRequest.approved_amount) {
          if (prevName === 'APPROVED' && !fullRequest.is_for_advance) {
            // Non-advance: expense not yet recorded — record net expense (approved - refund)
            const refundAmt  = Number(fullRequest.refund_amount || 0);
            const approvedAmt = Number(fullRequest.approved_amount);
            const netExpense  = approvedAmt - refundAmt;

            await this.annualBudgetService.updateBudgetFinancials(
              fullRequest.department_id,
              new Date().getFullYear(),
              -Number(fullRequest.total_budget || 0), // Release allocation
              netExpense > 0 ? netExpense : 0,        // Record net expense
              userId,
              {
                type: 'EXPENSE_APPROVED',
                description: `Subsidy approved — pending partial/full refund`,
                subsidy_request_id: id
              }
            );
          }
          // WAITING_DOCUMENTS → WAITING_REFUND: expense was already recorded at WAITING_DOCUMENTS transition
          // ADVANCED_CLOSED → WAITING_REFUND: expense was already recorded at ADVANCED_CLOSED transition
          // No double-recording needed
        }
      }

      // ── Email notifications on status change ───────────────────────────────────
      // Fire-and-forget: email failures must never block the mutation response
      this.handleSubsidyStatusChangeNotifications(id, newStatus?.name ?? '', language, userId).catch(e => {
        console.error('[SubsidyRequestService] Failed to send subsidy status change notifications:', e);
      });
    }

    // If priority changed, create history record
    if (data.priority && data.priority !== current.priority) {
      await this.historyRepository.create({
        subsidy_request_id: id,
        status_id: current.subsidy_statuses_id, // Keep current status context
        type: SubsidyHistoryType.PRIORITY_CHANGE,
        reason: translate('history.priority_changed', language, { ns: 'subsidy', from: current.priority, to: data.priority }),
        changed_by: userId,
      });
    }

    return result;
  }

  /**
   * ── Subsidy Status Change Notification Matrix ──────────────────────────────
   *
   * │ Status            │ Owner/Co-owner │ Finance Users        │
   * │───────────────────│────────────────│──────────────────────│
   * │ PENDING           │ ❌             │ ✅ (review needed)   │
   * │ IN_REVIEW         │ ✅             │ ❌                   │
   * │ APPROVED          │ ✅             │ ✅ (payment needed)  │
   * │ REJECTED          │ ✅             │ ❌                   │
   * │ ADVANCED_CLOSED   │ ✅             │ ✅ (docs expected)   │
   * │ WAITING_DOCUMENTS │ ✅             │ ❌                   │
   * │ WAITING_REFUND    │ ✅             │ ✅ (refund needed)   │
   * │ CLOSED            │ ✅             │ ❌                   │
   *
   * Finance users are all active FINANCIAL_MANAGER role holders in the same institution.
   * Called fire-and-forget — failures never block the mutation.
   */
  private async handleSubsidyStatusChangeNotifications(
    subsidyId: string,
    newStatusName: string,
    language: LanguagePreference,
    userId: string,
  ): Promise<void> {
    const statusUp = newStatusName.toUpperCase();

    // Fetch subsidy with all data needed for notifications in one query
    const subsidy = await this.prisma.subsidyRequest.findUnique({
      where: { id: subsidyId },
      select: {
        description: true,
        institution_id: true,
        project: {
          select: {
            id: true,
            title: true,
            owner: { select: { id: true, name: true, email: true, language_preference: true } },
            co_owner: { select: { id: true, name: true, email: true, language_preference: true } },
          },
        },
      },
    });

    if (!subsidy?.project) return;

    const { project } = subsidy;
    const subsidyDescription = subsidy.description || project.title || subsidyId;
    const projectUrl = `${process.env.FRONTEND_URL}/dashboard/projects/${project.id}`;

    // ── Helper: send generic status-change email to owner/co-owner ─────────
    const sendMemberEmail = async (user: { id: string; name: string; email: string; language_preference?: string | null } | null) => {
      if (!user?.email) return;
      const recipientLang = (user.language_preference as LanguagePreference) || language;
      await this.emailService.sendSubsidyStatusChangedEmail({
        to: user.email,
        recipientName: user.name,
        subsidyDescription,
        projectName: project.title,
        projectUrl,
        newStatus: newStatusName,
        language: recipientLang,
      });
    };

    // ── Helper: send targeted finance email ────────────────────────────────
    const sendFinanceEmail = async (user: { id: string; name: string; email: string | null; language_preference: string | null }) => {
      if (!user.email) return;
      const recipientLang = (user.language_preference as LanguagePreference) || language;
      await this.emailService.sendSubsidyStatusChangedFinanceEmail({
        to: user.email,
        recipientName: user.name,
        subsidyDescription,
        projectName: project.title,
        projectUrl,
        newStatus: newStatusName,
        language: recipientLang,
      });
    };

    // ── Statuses that require finance action ───────────────────────────────
    // PENDING removed: finance doesn't need to act at submission, department leader does
    // WAITING_DOCUMENTS added: finance needs to know documents arrived for validation
    const FINANCE_ALERT_STATUSES = ['APPROVED', 'ADVANCED_CLOSED', 'WAITING_DOCUMENTS', 'WAITING_REFUND'];
    const notifyFinance = FINANCE_ALERT_STATUSES.includes(statusUp);

    // ── All statuses notify members (owner/co-owner) ────────────────────────
    // PENDING: member submitted the request — notify them of confirmation
    const notifyMembers = true;

    // ── Send member emails ─────────────────────────────────────────────────
    if (notifyMembers) {
      if (project.co_owner) {
        await sendMemberEmail(project.co_owner);
      }
      if (project.owner && project.owner.id !== project.co_owner?.id) {
        await sendMemberEmail(project.owner);
      }
    }

    // ── Send finance emails ────────────────────────────────────────────────
    if (notifyFinance && subsidy.institution_id) {
      const financeUsers = await this.prisma.user.findMany({
        where: {
          institution_id: subsidy.institution_id,
          is_deleted: false,
          user_roles: {
            some: {
              is_deleted: false,
              role: { key_code: 'FINANCIAL_MANAGER' },
            },
          },
        },
        select: { id: true, name: true, email: true, language_preference: true },
      });

      for (const financeUser of financeUsers) {
        await sendFinanceEmail(financeUser);
      }
    }

    // ── Notify WebSockets via ProjectHistory ─────────────────────────────
    if (project.id) {
      this.projectHistoryService.logEvent(
        project.id,
        userId,
        ProjectHistoryType.STATUS_CHANGED,
        {
          field_name: 'subsidy_status',
          old_value: '', // We don't track the exact old status in this generic method
          new_value: newStatusName,
          comment: `subsidy_status_changed`, // Translation key
          metadata: { 
            subsidyDescription,
            newStatus: newStatusName 
          }
        }
      ).catch(e => console.error('[SubsidyRequestService] Failed to log project history for subsidy status change:', e));
    }
  }


  async addMessage(subsidyRequestId: string, message: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<any> {
    const subsidyRequest = await this.subsidyRequestRepository.findById(subsidyRequestId);
    if (!subsidyRequest) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    this.ensureNotClosed(subsidyRequest.subsidy_status?.name, language);

    return this.historyRepository.create({
      subsidy_request_id: subsidyRequestId,
      status_id: subsidyRequest.subsidy_statuses_id,
      previous_status_id: undefined,
      type: SubsidyHistoryType.COMMENT,
      reason: message,
      changed_by: userId,
    });
  }

  async delete(id: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Buscar subsidy request com status
    const subsidyRequest = await this.prisma.subsidyRequest.findUnique({
      where: { id, is_deleted: false },
      include: {
        subsidy_status: true,
      },
    });

    if (!subsidyRequest) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Validação de acesso: apenas requester, owner, co-owner, ou admin podem deletar
    const isRequester = subsidyRequest.requester_id === userId || subsidyRequest.created_by === userId;
    let isOwnerOrCoOwner = false;
    
    const project = await this.prisma.project.findUnique({
      where: { id: subsidyRequest.project_id },
      select: { owner_id: true, co_owner_id: true }
    });
    
    if (project) {
      isOwnerOrCoOwner = project.owner_id === userId || project.co_owner_id === userId;
    }
    
    const userObj = await this.prisma.user.findUnique({ where: { id: userId }, include: { user_roles: { include: { role: true } } } });
    const isAdmin = userObj?.user_roles.some(r => r.role.key_code === 'ADMIN' || r.role.key_code === 'DEV');
    
    if (!isRequester && !isOwnerOrCoOwner && !isAdmin) {
      throw new CustomGraphQLError(
        translate('errors.forbidden', language, { ns: 'common' }) || 'You do not have permission to delete this subsidy request.',
        ErrorCode.FORBIDDEN,
        403
      );
    }

    // Validação: Não permitir deletar se status for APPROVED ou CLOSED
    const blockedStatuses = ['APPROVED', 'CLOSED'];
    if (subsidyRequest.subsidy_status?.name && blockedStatuses.includes(subsidyRequest.subsidy_status.name)) {
      throw new CustomGraphQLError(
        translate('errors.cannot_delete_approved_or_closed', language, { ns: 'subsidy', status: subsidyRequest.subsidy_status.name.toLowerCase() }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'SUBSIDY_IS_APPROVED_OR_CLOSED' } }
      );
    }

    // Executar soft delete em cascata dentro de uma transação
    const result = await this.prisma.$transaction(async (_tx) => {
      // 0. Create history record BEFORE deletion (para manter auditoria)
      await this.historyRepository.create({
        subsidy_request_id: id,
        status_id: subsidyRequest.subsidy_statuses_id,
        previous_status_id: undefined,
        type: SubsidyHistoryType.STATUS_CHANGE,
        reason: translate('history.subsidy_deleted', language, { ns: 'subsidy' }),
        changed_by: userId,
      });

      // 1. Soft delete todos os receipts
      await this.prisma.subsidyReceipt.updateMany({
        where: {
          subsidy_request_id: id,
          is_deleted: false,
        },
        data: {
          is_deleted: true,
          deleted_at: new Date(),
          deleted_by: userId,
          updated_by: userId,
        },
      });

      // 2. Soft delete todos os items
      await this.subsidyRequestItemRepository.softDeleteBySubsidyRequestId(id, userId);

      // 3. Soft delete todo o histórico de status
      await this.historyRepository.softDeleteBySubsidyRequestId(id, userId);

      // 4. Soft delete o SubsidyRequest
      const deletedSubsidy = await this.subsidyRequestRepository.softDelete(id, userId);

      return deletedSubsidy;
    });

    // 5. Renomear pasta no Google Drive (fora da transação, não crítico se falhar)
    try {
      console.log(`🔍 Searching for Google Drive folder for subsidy ${id}`);
      
      // Buscar um receipt deste subsidy request que tenha drive_file_id
      const receipt = await this.prisma.subsidyReceipt.findFirst({
        where: {
          subsidy_request_id: id,
          drive_file_id: { not: null },
        },
      });

      console.log(`📄 Found receipt:`, receipt ? { id: receipt.id, drive_file_id: receipt.drive_file_id } : 'No receipt found');

      if (receipt?.drive_file_id) {
        // Obter metadados do arquivo para encontrar o parent folder
        console.log(`📂 Getting file metadata for drive_file_id: ${receipt.drive_file_id}`);
        const fileMetadata = await this.driveService.getFileMetadata(receipt.drive_file_id);
        
        console.log(`📊 File metadata:`, {
          id: fileMetadata.id,
          name: fileMetadata.name,
          parents: fileMetadata.parents,
        });
        
        // O parent do arquivo é a pasta do subsídio
        if (fileMetadata.parents && fileMetadata.parents.length > 0) {
          const folderId = fileMetadata.parents[0];
          console.log(`📁 Found parent folder ID: ${folderId}`);
          await this.driveService.renameFolderWithPrefix(folderId, '[DELETED] ');
          console.log(`✅ Renamed Google Drive folder for subsidy ${id}`);
        } else {
          console.log(`⚠️  No parent folder found for subsidy ${id}`);
          console.log(`⚠️  File metadata parents:`, fileMetadata.parents);
        }
      } else {
        console.log(`⚠️  No receipts with drive_file_id found for subsidy ${id}`);
      }
    } catch (error) {
      // Log error but don't fail the deletion
      console.error(`❌ Error renaming Google Drive folder for subsidy ${id}:`, error);
      console.error(`❌ Error details:`, {
        message: error.message,
        stack: error.stack,
      });
    }

    return result;
  }

  async findById(id: string): Promise<SubsidyRequest | null> {
    return this.subsidyRequestRepository.findById(id);
  }

  async findAll(): Promise<SubsidyRequest[]> {
    return this.subsidyRequestRepository.findAll();
  }

  async getCollaboratorsForSubsidyRequest(subsidyRequest: SubsidyRequest): Promise<ProjectCollaborator[]> {
    const rolesPriority: Record<CollaboratorRole, number> = {
      [CollaboratorRole.owner]: 0,
      [CollaboratorRole.co_owner]: 1,
      [CollaboratorRole.requester]: 2,
      [CollaboratorRole.finance]: 3,
      [CollaboratorRole.assignee]: 4,
    };

    const collaboratorsMap = new Map<string, ProjectCollaborator>();

    const addOrKeep = (userId: string, entry: ProjectCollaborator) => {
      const existing = collaboratorsMap.get(userId);
      if (!existing || rolesPriority[entry.role] < rolesPriority[existing.role]) {
        collaboratorsMap.set(userId, entry);
      }
    };

    const project = (subsidyRequest as any).project as {
      owner_id?: string;
      owner?: unknown;
      co_owner_id?: string | null;
      co_owner?: unknown;
    } | null;

    // 1. Owner do projeto vinculado
    if (project?.owner && project.owner_id) {
      addOrKeep(project.owner_id, {
        user: project.owner as unknown as User,
        role: CollaboratorRole.owner,
        activity_ids: [],
      });
    }

    // 2. Co-owner do projeto vinculado
    if (project?.co_owner && project.co_owner_id) {
      addOrKeep(project.co_owner_id, {
        user: project.co_owner as unknown as User,
        role: CollaboratorRole.co_owner,
        activity_ids: [],
      });
    }

    // 3. Solicitante (quem criou o pedido)
    if (subsidyRequest.requester && subsidyRequest.requester_id) {
      addOrKeep(subsidyRequest.requester_id, {
        user: subsidyRequest.requester as unknown as User,
        role: CollaboratorRole.requester,
        activity_ids: [],
      });
    }

    // 4. Gestores financeiros (FINANCIAL_MANAGER) da mesma instituição
    if (subsidyRequest.institution_id) {
      const financeUsers = await this.prisma.user.findMany({
        where: {
          institution_id: subsidyRequest.institution_id,
          is_deleted: false,
          user_roles: {
            some: {
              is_deleted: false,
              role: { key_code: 'FINANCIAL_MANAGER' },
            },
          },
        },
      });

      for (const financeUser of financeUsers) {
        addOrKeep(financeUser.id, {
          user: financeUser as unknown as User,
          role: CollaboratorRole.finance,
          activity_ids: [],
        });
      }
    }

    return Array.from(collaboratorsMap.values());
  }

  async findByProjectId(projectId: string): Promise<SubsidyRequest[]> {
    return this.subsidyRequestRepository.findManyByFilters({ project_id: projectId });
  }

  /**
   * Submit a DRAFT subsidy request for review (DRAFT → PENDING).
   */
  async submit(id: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    const current = await this.subsidyRequestRepository.findById(id);

    if (!current) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404,
      );
    }

    if (current.subsidy_status?.name?.toUpperCase() !== 'DRAFT') {
      throw new CustomGraphQLError(
        translate('errors.invalid_transition_from_draft', language, { ns: 'subsidy', to: current.subsidy_status?.name ?? 'UNKNOWN' }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'INVALID_TRANSITION_FROM_DRAFT' } },
      );
    }

    const pendingStatus = await this.prisma.subsidyStatus.findFirst({
      where: { name: 'PENDING', is_deleted: false },
    });

    if (!pendingStatus) {
      throw new CustomGraphQLError(
        translate('errors.pending_status_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404,
      );
    }

    return this.update(id, { subsidy_status_id: pendingStatus.id, notes: translate('history.request_submitted', language, { ns: 'subsidy' }) }, userId, language);
  }

  async approve(id: string, approvedAmount: number, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Get current subsidy
    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Validate Status Transition
    this.validateStatusTransition(current.subsidy_status?.name, 'APPROVED', language);

    // Validação de documentos: apenas obrigatória para WITH_DOCUMENT
    const requestType = (current as any).request_type as SubsidyRequestType | undefined;
    const requiresDocumentValidation = !requestType || requestType === SubsidyRequestType.WITH_DOCUMENT;

    if (requiresDocumentValidation) {
      // Ensure all documents are approved (not just validated - rejects any with rejected docs)
      await this.ensureAllDocumentsApproved(id, language);
    }

    // Buscar status "APPROVED"
    const approvedStatus = await this.prisma.subsidyStatus.findFirst({
      where: { name: 'APPROVED', is_deleted: false },
    });

    if (!approvedStatus) {
      throw new CustomGraphQLError(
        translate('errors.approved_status_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    const result = await this.subsidyRequestRepository.update(
      id,
      {
        approved_amount: approvedAmount,
        subsidy_status_id: approvedStatus.id,
        approved_at: new Date(),
        approved_by: userId,
      } as SubsidyRequestUpdateDto,
      userId,
    );

    // Create history record
    await this.historyRepository.create({
      subsidy_request_id: id,
      status_id: approvedStatus.id,
      previous_status_id: current.subsidy_statuses_id,
      reason: translate('history.request_approved', language, { ns: 'subsidy', amount: approvedAmount }),
      changed_by: userId,
    });

    // Budget remains as planned/allocated when approved
    // Expense will only be added to spent when status changes to CLOSED

    // Fire-and-forget email notifications
    this.handleSubsidyStatusChangeNotifications(id, 'APPROVED', language, userId).catch(e => {
      console.error('[SubsidyRequestService] Failed to send approve notifications:', e);
    });

    return result;
  }

  async reject(id: string, rejectionReason: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<SubsidyRequest> {
    // Get current subsidy
    const current = await this.subsidyRequestRepository.findById(id);
    
    if (!current) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Validate Status Transition
    this.validateStatusTransition(current.subsidy_status?.name, 'REJECTED', language);

    // Ensure all documents are validated
    await this.ensureAllDocumentsValidated(id, language);

    // Buscar status "REJECTED"
    const rejectedStatus = await this.prisma.subsidyStatus.findFirst({
      where: { name: 'REJECTED', is_deleted: false },
    });

    if (!rejectedStatus) {
      throw new CustomGraphQLError(
        translate('errors.rejected_status_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    const result = await this.subsidyRequestRepository.update(
      id,
      {
        rejection_reason: rejectionReason,
        subsidy_status_id: rejectedStatus.id,
      } as SubsidyRequestUpdateDto,
      userId,
    );

    // Create history record
    await this.historyRepository.create({
      subsidy_request_id: id,
      status_id: rejectedStatus.id,
      previous_status_id: current.subsidy_statuses_id,
      reason: rejectionReason || translate('history.request_rejected', language, { ns: 'subsidy' }),
      changed_by: userId,
    });

    // No budget transaction on rejection.
    // The project's ALLOCATION_RESERVED covers all subsidy requests in aggregate;
    // individual subsidies never create their own ALLOCATION_RESERVED, so there
    // is nothing to release here. The project allocation remains intact.

    // Fire-and-forget email notifications
    this.handleSubsidyStatusChangeNotifications(id, 'REJECTED', language, userId).catch(e => {
      console.error('[SubsidyRequestService] Failed to send reject notifications:', e);
    });

    return result;
  }

  /**
   * Recalculates subsidy status based on document validations.
   * NOTE: This method NO LONGER automatically changes status to APPROVED/REJECTED.
   * Status changes to APPROVED/REJECTED/CLOSED must be done manually by the user.
   * This prevents duplicate budget calculations when documents are validated.
   */
  async recalculateStatus(id: string, userId: string, language: LanguagePreference = LanguagePreference.en): Promise<void> {
    const subsidyRequest = await this.subsidyRequestRepository.findById(id);
    if (!subsidyRequest) return;

    // Fetch all receipts
    const receipts = await this.prisma.subsidyReceipt.findMany({
      where: { 
        subsidy_request_id: id,
        is_deleted: false 
      }
    });

    const totalDocs = receipts.length;
    if (totalDocs === 0) return; // No documents, do nothing

    const approvedDocs = receipts.filter(r => r.is_validated && r.approved).length;
    const rejectedDocs = receipts.filter(r => r.is_validated && !r.approved).length;
    const pendingDocs = receipts.filter(r => !r.is_validated).length;

    // Determine what status WOULD be if auto-updated (for logging only)
    let suggestedStatus = 'PENDING';
    if (approvedDocs === totalDocs) {
      suggestedStatus = 'APPROVED';
    } else if (rejectedDocs === totalDocs) {
      suggestedStatus = 'REJECTED';
    } else if (pendingDocs < totalDocs) {
      suggestedStatus = 'IN_REVIEW';
    }

    console.log(`📊 [recalculateStatus] Subsidy ${id}: ${approvedDocs}/${totalDocs} approved, ${rejectedDocs}/${totalDocs} rejected, ${pendingDocs}/${totalDocs} pending. Suggested status: ${suggestedStatus}`);

    // Only auto-update to IN_REVIEW when documents start being validated
    // Skip auto-update if still in DRAFT — wait for explicit submission
    const currentStatusName = subsidyRequest.subsidy_status?.name?.toUpperCase();
    if (currentStatusName === 'DRAFT') {
      console.log(`⏭️  Skipping auto-status for subsidy ${id}: still in DRAFT`);
      return;
    }

    if (suggestedStatus === 'IN_REVIEW') {
      const status = await this.prisma.subsidyStatus.findFirst({
        where: { name: 'IN_REVIEW', is_deleted: false }
      });

      if (status && subsidyRequest.subsidy_statuses_id !== status.id) {
        console.log(`🤖 Auto-updating subsidy ${id} status to IN_REVIEW`);
        const updateData: SubsidyRequestUpdateDto = {
          subsidy_status_id: status.id,
          notes: translate('history.auto_status_in_review', language, { ns: 'subsidy', approved: approvedDocs, rejected: rejectedDocs, pending: pendingDocs })
        };
        await this.update(id, updateData, userId, language);
      }
    }
    // For APPROVED/REJECTED, just log - user must manually approve/reject to trigger budget calculations
  }

  // Analytics methods
  async getSubsidyKPIs(institutionId?: string): Promise<SubsidyKPIs> {
    const where = institutionId ? { institution_id: institutionId, is_deleted: false } : { is_deleted: false };
    
    const requests = await this.prisma.subsidyRequest.findMany({
      where,
      include: { subsidy_status: true }
    });
    
    const totalRequests = requests.length;
    const pendingRequests = requests.filter(r => r.subsidy_status?.name === 'PENDING').length;
    const inReviewRequests = requests.filter(r => r.subsidy_status?.name === 'IN_REVIEW').length;
    const approvedRequests = requests.filter(r => r.subsidy_status?.name === 'APPROVED').length;
    const rejectedRequests = requests.filter(r => r.subsidy_status?.name === 'REJECTED').length;
    const closedRequests = requests.filter(r => r.subsidy_status?.name === 'CLOSED').length;
    
    const totalRequested = DecimalHelper.sum(requests.map(r => r.total_budget)).toNumber();
    const approvedRequestsList = requests.filter(r => r.subsidy_status?.name === 'APPROVED');
    const totalApproved = DecimalHelper.sum(approvedRequestsList.map(r => r.approved_amount)).toNumber();
    
    const approvalRate = totalRequests > 0 ? Math.round((approvedRequests / totalRequests) * 100) : 0;
    
    return {
      totalRequests,
      pendingRequests,
      inReviewRequests,
      approvedRequests,
      rejectedRequests,
      closedRequests,
      totalRequested,
      totalApproved,
      approvalRate
    };
  }

  async getSubsidyByDepartment(institutionId?: string): Promise<SubsidyByDepartment[]> {
    const requests = await this.prisma.subsidyRequest.findMany({
      where: institutionId ? { institution_id: institutionId, is_deleted: false } : { is_deleted: false },
      include: { department: true }
    });
    
    const grouped: Record<string, Record<string, number>> = {};
    
    requests.forEach(request => {
      const dept = request.department?.name || 'Other';
      const month = format(new Date(request.created_at), 'MMM');
      
      if (!grouped[dept]) grouped[dept] = {};
      if (!grouped[dept][month]) grouped[dept][month] = 0;
      
      const currentTotal = grouped[dept][month] || 0;
      grouped[dept][month] = DecimalHelper.toDecimal(currentTotal).plus(request.total_budget).toNumber();
    });
    
    const result: SubsidyByDepartment[] = [];
    Object.entries(grouped).forEach(([dept, months]) => {
      Object.entries(months).forEach(([month, amount]) => {
        result.push({ department: dept, month, amount });
      });
    });
    
    return result;
  }

  async getSubsidyByMonth(institutionId?: string): Promise<SubsidyByMonth[]> {
    const requests = await this.prisma.subsidyRequest.findMany({
      where: institutionId ? { institution_id: institutionId, is_deleted: false } : { is_deleted: false },
      include: { subsidy_status: true }
    });
    
    const monthlyData: Record<string, { approved: number, pending: number, rejected: number }> = {};
    
    requests.forEach(request => {
      const monthName = format(new Date(request.created_at), 'MMMM');
      
      if (!monthlyData[monthName]) {
        monthlyData[monthName] = { approved: 0, pending: 0, rejected: 0 };
      }
      
      const status = request.subsidy_status?.name;
      if (status === 'APPROVED') monthlyData[monthName].approved++;
      else if (status === 'PENDING') monthlyData[monthName].pending++;
      else if (status === 'REJECTED') monthlyData[monthName].rejected++;
    });
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = new Date().getMonth();
    
    return months.slice(0, currentMonth + 1).map((month, index) => ({
      month,
      approved: monthlyData[month]?.approved || 0,
      pending: monthlyData[month]?.pending || 0,
      rejected: monthlyData[month]?.rejected || 0,
      quarter: Math.floor(index / 3) + 1
    }));
  }

  /**
   * Request a refund for a subsidy.
   * Sets have_refund = true and refund_amount.
   * Creates history record with translated reason.
   */
  async requestRefund(
    id: string,
    refundAmount: number,
    refundType: 'TOTAL' | 'PARTIAL',
    reason: string,
    userId: string,
    language: LanguagePreference = LanguagePreference.en
  ): Promise<SubsidyRequest> {
    const subsidyRequest = await this.subsidyRequestRepository.findById(id);
    
    if (!subsidyRequest) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Validate refund amount
    if (refundAmount <= 0) {
      throw new CustomGraphQLError(
        translate('errors.refund_amount_invalid', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    // Update subsidy request
    const result = await this.subsidyRequestRepository.update(
      id,
      {
        refund_amount: refundAmount,
        refund_type: refundType,
        have_refund: true,
        refund_rejected: false, // Reset rejection if requested again
      } as any,
      userId
    );

    // Create history record
    await this.historyRepository.create({
      subsidy_request_id: id,
      status_id: subsidyRequest.subsidy_statuses_id,
      type: SubsidyHistoryType.COMMENT,
      reason: translate('history.refund_requested', language, { ns: 'subsidy', amount: refundAmount, reason }),
      changed_by: userId,
    });

    // Send email notification to requester
    try {
      const requester = await this.prisma.user.findUnique({
        where: { id: subsidyRequest.requester_id },
        select: { email: true, name: true, language_preference: true }
      });

      if (requester?.email) {
        const frontendUrl = process.env.FRONTEND_BASE_URL || 'http://localhost:3000';
        const projectUrl = `${frontendUrl}/projects/${subsidyRequest.project_id}`;
        
        await this.emailService.sendRefundRequestedEmail({
          to: requester.email,
          subsidyName: subsidyRequest.description || 'Subsidy Request',
          projectName: subsidyRequest.project?.title || 'Unknown Project',
          projectUrl,
          refundAmount,
          requesterName: requester.name,
          reason,
          language: (requester.language_preference as any) || language,
        });

        // Log email sent in history
        await this.historyRepository.create({
          subsidy_request_id: id,
          status_id: subsidyRequest.subsidy_statuses_id,
          type: SubsidyHistoryType.COMMENT,
          reason: translate('history.email_sent_refund_request', language, { ns: 'subsidy', email: requester.email }),
          changed_by: userId,
        });
      }
    } catch (emailError) {
      console.error('Failed to send refund requested email:', emailError);
    }

    return result;
  }

  /**
   * Confirm that refund has been processed.
   * Sets refund_done = true.
   * Processes budget refund (moves from spent back to allocated).
   * Creates history record with translation.
   */
  async confirmRefundDone(
    id: string,
    userId: string,
    language: LanguagePreference = LanguagePreference.en
  ): Promise<SubsidyRequest> {
    const subsidyRequest = await this.subsidyRequestRepository.findById(id);
    
    if (!subsidyRequest) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    // Validate that have_refund is true
    if (!(subsidyRequest as any).have_refund) {
      throw new CustomGraphQLError(
        translate('errors.no_refund_requested', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'NO_REFUND_REQUESTED' } }
      );
    }

    // Validate that refund is not already done
    if ((subsidyRequest as any).refund_done) {
      throw new CustomGraphQLError(
        translate('errors.refund_already_done', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400,
        { additional: { errorCode: 'REFUND_ALREADY_DONE' } }
      );
    }

    const refundAmount = Number((subsidyRequest as any).refund_amount || 0);

    // Update subsidy request
    const result = await this.subsidyRequestRepository.update(
      id,
      {
        refund_done: true,
      } as any,
      userId
    );

    // Process budget refund (move from spent back to allocated)
    if (subsidyRequest.department_id && refundAmount > 0) {
      await this.annualBudgetService.updateBudgetFinancials(
        subsidyRequest.department_id,
        new Date().getFullYear(),
        refundAmount, // Add back to allocated
        -refundAmount, // Remove from spent
        userId,
        {
          type: (subsidyRequest as any).refund_type === 'PARTIAL' ? 'REFUND_PARTIAL' : 'REFUND_TOTAL',
          description: `Subsidy refund processed`,
          subsidy_request_id: id
        }
      );
    }

    // Create history record
    await this.historyRepository.create({
      subsidy_request_id: id,
      status_id: subsidyRequest.subsidy_statuses_id,
      type: SubsidyHistoryType.COMMENT,
      reason: translate('history.refund_confirmed', language, { ns: 'subsidy', amount: refundAmount }),
      changed_by: userId,
    });

    // Send email notification to requester
    try {
      const requester = await this.prisma.user.findUnique({
        where: { id: subsidyRequest.requester_id },
        select: { email: true, name: true, language_preference: true }
      });

      console.log(`[SubsidyRequestService] Found requester for refund email: ${requester?.email ? requester.email : 'No email found'}`);

      if (requester?.email) {
        console.log(`[SubsidyRequestService] Attempting to send refund email to ${requester.email}`);
        
        const frontendUrl = process.env.FRONTEND_BASE_URL || 'http://localhost:3000';
        const projectUrl = `${frontendUrl}/projects/${subsidyRequest.project_id}`;

        await this.emailService.sendRefundReceivedEmail({
          to: requester.email,
          subsidyName: subsidyRequest.description || 'Subsidy Request',
          projectName: subsidyRequest.project?.title || 'Unknown Project',
          projectUrl,
          refundAmount,
          requesterName: requester.name,
          language: (requester.language_preference as any) || language,
        });
        console.log(`[SubsidyRequestService] Refund email sent successfully`);

        // Log email sent in history
        await this.historyRepository.create({
          subsidy_request_id: id,
          status_id: subsidyRequest.subsidy_statuses_id,
          type: SubsidyHistoryType.COMMENT,
          reason: translate('history.email_sent_refund_received', language, { ns: 'subsidy', email: requester.email }),
          changed_by: userId,
        });
      } else {
        console.warn(`[SubsidyRequestService] Skipping email sending for subsidy ${id} because requester has no email.`);
      }
    } catch (emailError) {
      // Log error but don't fail the refund confirmation
      console.error('[SubsidyRequestService] Failed to send refund email:', emailError);
    }

    return result;
  }

  /**
   * Rejects a requested refund.
   * Sets refund_rejected = true so frontend knows.
   */
  async rejectRefund(
    id: string,
    reason: string,
    userId: string,
    language: LanguagePreference = LanguagePreference.en
  ): Promise<SubsidyRequest> {
    const subsidyRequest = await this.subsidyRequestRepository.findById(id);
    
    if (!subsidyRequest) {
      throw new CustomGraphQLError(
        translate('errors.subsidy_not_found', language, { ns: 'subsidy' }),
        ErrorCode.NOT_FOUND,
        404
      );
    }

    if (!(subsidyRequest as any).have_refund) {
      throw new CustomGraphQLError(
        translate('errors.no_refund_requested', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    if ((subsidyRequest as any).refund_done) {
      throw new CustomGraphQLError(
        translate('errors.refund_already_done', language, { ns: 'subsidy' }),
        ErrorCode.BAD_REQUEST,
        400
      );
    }

    const result = await this.subsidyRequestRepository.update(
      id,
      {
        refund_rejected: true,
      } as any,
      userId
    );

    // Create history record
    await this.historyRepository.create({
      subsidy_request_id: id,
      status_id: subsidyRequest.subsidy_statuses_id,
      type: SubsidyHistoryType.COMMENT,
      reason: translate('history.refund_rejected', language, { ns: 'subsidy', reason }),
      changed_by: userId,
    });

    return result;
  }

  /**
   * Get all subsidies waiting for refund.
   * Returns subsidies where have_refund = true and refund_done = false.
   */
  async getSubsidiesWaitingRefund(institutionId?: string): Promise<SubsidyRequest[]> {
    const where: any = {
      is_deleted: false,
      have_refund: true,
      refund_done: false,
    };

    if (institutionId) {
      where.institution_id = institutionId;
    }

    return this.prisma.subsidyRequest.findMany({
      where,
      include: {
        subsidy_status: true,
        institution: true,
        department: true,
        church: true,
        project: true,
        requester: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });
  }
}

