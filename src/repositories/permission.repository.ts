import { Injectable } from '@nestjs/common';
import { Permission } from '@prisma/client';
import { PrismaService } from '../services';
import { PermissionGroupPermissionsModel } from '../models/role.model';

@Injectable()
export class PermissionRepository {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async findAll(userRoles: string[]): Promise<Permission[]> {
    const permissions = await this.prisma.permission.findMany({
      where: {
        is_deleted: false,
        disabled_to_client: userRoles.includes('dev') ? undefined : false,
      },
    });

    return permissions;
  }

  async findAllGrouped(userRoles: string[]): Promise<PermissionGroupPermissionsModel[]> {
    const permissions = await this.findAll(userRoles);
    const grouped: Record<string, Permission[]> = {};
    for (const perm of permissions) {
      const group = perm.group || 'OUTROS';
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(perm);
    }
    return Object.entries(grouped).map(([group, perms]) => {
        return {
          group: group.toString(),
          data: perms.map(perm => ({
            id: perm.id,
            name: perm.name,
            description: perm.description,
            key_code: perm.key_code,
            resolver_name: perm.resolver_name,
            group: perm.group?.toString(),
            created_at: perm.created_at,
            updated_at: perm.updated_at,
            created_by: perm.created_by,
            updated_by: perm.updated_by,
            is_deleted: perm.is_deleted,
            deleted_at: perm.deleted_at,
            deleted_by: perm.deleted_by,
            disabled_to_client: perm.disabled_to_client
          }))
        };
      });
  }
}
