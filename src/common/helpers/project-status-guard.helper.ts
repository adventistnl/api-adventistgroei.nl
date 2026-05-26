import { ProjectStatus } from '../../@generated/prisma/project-status.enum';
import { CustomGraphQLError, ErrorCode } from '../errors/custom-graphql-error';

export interface StatusGuardConfig {
  /** Statuses that block the action (throw error) */
  blockedStatuses: ProjectStatus[];
  /** Error message to display when blocked */
  errorMessage?: string;
  /** Internal error code for debugging */
  errorCode?: string;
}

/**
 * Flexible status guard hook.
 * Throws a BAD_REQUEST error if the given status is in the blockedStatuses list.
 *
 * Usage:
 *   assertStatusNotBlocked(project.status, {
 *     blockedStatuses: [ProjectStatus.OPEN_REQUEST, ProjectStatus.IN_REVIEW],
 *     errorMessage: 'Action not allowed in this project status',
 *     errorCode: 'EDIT_LOCKED',
 *   });
 */
export function assertStatusNotBlocked(
  currentStatus: ProjectStatus,
  config: StatusGuardConfig,
): void {
  if (config.blockedStatuses.includes(currentStatus)) {
    throw new CustomGraphQLError(
      config.errorMessage ?? 'This action is not allowed while the project is in its current status',
      ErrorCode.BAD_REQUEST,
      400,
      { additional: { errorCode: config.errorCode ?? 'STATUS_BLOCKED' } },
    );
  }
}

/**
 * Preset: statuses that lock co-owner activity editing.
 * Co-owners cannot create/update activities when the project is in any of these statuses.
 */
export const ACTIVITY_EDIT_BLOCKED_STATUSES: ProjectStatus[] = [
  ProjectStatus.OPEN_REQUEST,
  ProjectStatus.IN_REVIEW,
  ProjectStatus.PENDING_RECEIPT,
  ProjectStatus.WAITING_REFUND,
  ProjectStatus.CONCLUDED,
];
