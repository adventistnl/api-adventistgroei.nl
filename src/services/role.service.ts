import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../repositories/role.repository';
import { CreateRoleInput, UpdateRoleInput } from '../dto/role.dto';
import { PermissionGroupPermissionsModel, RoleAssignmentModel, RoleModel } from '../models';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async create(input: CreateRoleInput, userId: string): Promise<RoleModel> {
    const role = await this.roleRepository.create({
      name: input.name,
      description: input.description,
      key_code: input.key_code,
      permissionIds: input.permissionIds,
      created_by: userId,
    });
    return this.toModel(role);
  }

  async update(input: UpdateRoleInput, userId: string): Promise<RoleModel> {
    const role = await this.roleRepository.update(input.id, {
      name: input.name,
      description: input.description,
      key_code: input.key_code,
      permissionIds: input.permissionIds,
      updated_by: userId,
    });
    return this.toModel(role);
  }

  async delete(id: string, userId: string): Promise<RoleModel> {
    const role = await this.roleRepository.delete(id, userId);
    return this.toModel(role);
  }

  async findById(id: string): Promise<RoleModel | null> {
    const role = await this.roleRepository.findById(id);
    if (!role) return null;
    return this.toModel(role);
  }

  async findAll(): Promise<RoleModel[]> {
    const roles = await this.roleRepository.findAll();
    return roles.map((role) => this.toModel(role));
  }
  async getUserIdsByRole(roleId: string): Promise<RoleAssignmentModel[]> {
    const userIds = (await this.roleRepository.getUserRolesByRoleId(roleId));
    return userIds;
  }

  // Agrupa permissions por group
  private toModel(role: {
    id: string;
    name: string;
    description: string;
    key_code: string;
    role_permissions?: { permission: PermissionGroupPermissionsModel }[];
    user_roles?: Array<{ user_id: string; is_deleted?: boolean }>
  }): RoleModel {
    const permissions = Array.isArray(role.role_permissions)
      ? role.role_permissions.map((rp) => rp.permission).filter((p): p is PermissionGroupPermissionsModel => !!p)
      : [];
    const grouped: Record<string, any[]> = {};
    for (const perm of permissions) {
      const groupCandidate = perm.group;
      const group = typeof groupCandidate === 'string' && groupCandidate.length > 0 ? groupCandidate : 'OUTRO';
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(perm);
    }
    return {
      id: role.id,
      name: role.name,
      description: role.description,
      key_code: role.key_code,
      permissions: Object.entries(grouped).map(([group, perms]) => ({ group, data: perms })),
    };
  }
}
