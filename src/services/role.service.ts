import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../repositories/role.repository';
import { CreateRoleInput, UpdateRoleInput } from '../dto/role.dto';
import { RoleModel, PermissionModel } from '../models';

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

  // Agrupa permissions por group
  private toModel(role: {
    id: string;
    name: string;
    description: string;
    key_code: string;
    role_permissions?: { permission: PermissionModel }[];
  }): RoleModel {
    const permissions: PermissionModel[] = Array.isArray(role.role_permissions)
      ? role.role_permissions
          .map((rp) => rp.permission)
          .filter((perm): perm is PermissionModel => !!perm)
      : [];
    const grouped: Record<string, PermissionModel[]> = {};
    for (const perm of permissions) {
      const group = perm && perm.group ? perm.group : 'OUTRO';
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
