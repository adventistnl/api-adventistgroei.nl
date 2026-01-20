import { Injectable } from '@nestjs/common';
import { Permission } from '@prisma/client';
import { PermissionGroupPermissionsModel } from '../models/role.model';
import { PermissionRepository } from '../repositories';

@Injectable()
export class PermissionService {
  constructor(private readonly permissionRepository: PermissionRepository) {}

  async findAll(userRoles: string[]): Promise<Permission[]> {
    return this.permissionRepository.findAll(userRoles);
  }

  async findAllGrouped(userRoles: string[]): Promise<PermissionGroupPermissionsModel[]> {
    return this.permissionRepository.findAllGrouped(userRoles);
  }
}
