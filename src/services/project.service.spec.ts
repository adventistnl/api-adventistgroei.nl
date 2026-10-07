import { Test, TestingModule } from '@nestjs/testing';
import { ProjectService } from './project.service';
import { PrismaService } from './prisma.service';
import { ProjectRepository } from '../repositories/project.repository';
import { SubsidyRequestService } from './subsidy-request.service';
import { ProjectActivityService } from './project-activity.service';
import { AnnualBudgetService } from './annual-budget.service';
import { UserRepository } from '../repositories/user.repository';
import { EmailService } from './email.service';
import { NotificationService } from './notification.service';
import { ProjectHistoryService } from './project-history.service';
import { CustomGraphQLError } from '../common/errors/custom-graphql-error';

describe('ProjectService', () => {
  let service: ProjectService;
  let userRepository: UserRepository;
  let projectRepository: ProjectRepository;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        { provide: ProjectRepository, useValue: { update: jest.fn(), findById: jest.fn() } },
        { provide: PrismaService, useValue: { 
          subsidyRequest: { count: jest.fn() },
          projectActivity: { count: jest.fn() },
          activityDocuments: { count: jest.fn() }
        } },
        { provide: SubsidyRequestService, useValue: {} },
        { provide: ProjectActivityService, useValue: {} },
        { provide: AnnualBudgetService, useValue: {} },
        { provide: UserRepository, useValue: { findByIdWithRoles: jest.fn(), findById: jest.fn().mockResolvedValue({ name: 'Test User', email: 'test@example.com' }) } },
        { provide: EmailService, useValue: { sendProjectStatusChangedEmail: jest.fn().mockResolvedValue(true) } },
        { provide: NotificationService, useValue: { createNotification: jest.fn().mockResolvedValue(true) } },
        { provide: ProjectHistoryService, useValue: { logEvent: jest.fn().mockResolvedValue(true) } },
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    userRepository = module.get<UserRepository>(UserRepository);
    projectRepository = module.get<ProjectRepository>(ProjectRepository);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('update status transitions', () => {
    const existingProject = { id: 'p1', owner_id: 'owner1', co_owner_id: 'co1', status: 'DRAFT' };

    beforeEach(() => {
      (projectRepository.findById as jest.Mock).mockResolvedValue(existingProject);
    });

    it('should allow owner to change from DRAFT to OPEN_REQUEST', async () => {
      (projectRepository.update as jest.Mock).mockResolvedValue({ ...existingProject, status: 'OPEN_REQUEST' });
      const res = await service.update('p1', { status: 'OPEN_REQUEST' }, 'owner1');
      expect(res.status).toBe('OPEN_REQUEST');
    });

    it('should throw if non-owner tries DRAFT to OPEN_REQUEST', async () => {
      await expect(service.update('p1', { status: 'OPEN_REQUEST' }, 'other'))
        .rejects.toThrow('Only the institutional owner can change the project status');
    });

    it('should allow ADMIN to change from OPEN_REQUEST to IN_REVIEW', async () => {
      existingProject.status = 'OPEN_REQUEST';
      (userRepository.findByIdWithRoles as jest.Mock).mockResolvedValue({
        user_roles: [{ role: { key_code: 'ADMIN' } }]
      });
      (projectRepository.update as jest.Mock).mockResolvedValue({ ...existingProject, status: 'IN_REVIEW' });
      
      const res = await service.update('p1', { status: 'IN_REVIEW' }, 'adminUser');
      expect(res.status).toBe('IN_REVIEW');
    });

    it('should throw for IN_PROGRESS -> WAITING_REFUND if no subsidies', async () => {
      existingProject.status = 'IN_PROGRESS';
      (userRepository.findByIdWithRoles as jest.Mock).mockResolvedValue({
        user_roles: [{ role: { key_code: 'ADMIN' } }]
      });
      (prisma.subsidyRequest.count as jest.Mock).mockResolvedValue(0);

      await expect(service.update('p1', { status: 'WAITING_REFUND' }, 'adminUser'))
        .rejects.toThrow('Cannot move to waiting refund: no subsidies requested');
    });
  });

});
