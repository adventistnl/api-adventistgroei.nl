import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../repositories/role.repository';
import { CreateRoleInput, UpdateRoleInput } from '../dto/role.dto';
import { RoleAssignmentModel, RoleModel } from '../models';
import { Role } from '../@generated/role/role.model';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async create(input: CreateRoleInput, userId: string, userRoles: string[]): Promise<RoleModel> {
    const role = await this.roleRepository.create({
      name: input.name,
      description: input.description,
      key_code: input.key_code,
      permissionIds: input.permissionIds,
      created_by: userId,
    });
    // Após criar, retornamos a role completa com todas as permissões
    // anotadas com `is_selected` para manter consistência com findById
    const full = await this.findById(role.id, userRoles);
    if (!full) throw new Error('Role not found after create');
    return full;
  }

  async update(input: UpdateRoleInput, userId: string, userRoles: string[]): Promise<RoleModel> {
    const existingRole = await this.roleRepository.findByIdWithPermissions(input.id);
    if (!existingRole) {
      throw new Error('Role not found');
    }

    // Se a role é fixa, verificar se permissões essenciais estão sendo removidas
    if (existingRole.is_fixed && input.removePermissionIds) {
      const essentialPermissions = existingRole.role_permissions?.filter(rp => rp.is_essential) || [];
      const essentialPermissionIds = essentialPermissions.map(rp => rp.permission_id);
      const attemptingToRemoveEssentials = input.removePermissionIds.filter(id => essentialPermissionIds.includes(id));
      if (attemptingToRemoveEssentials.length > 0) {
        throw new Error('Cannot remove essential permissions from fixed roles');
      }
    }

    await this.roleRepository.update(input.id, {
      name: input.name,
      description: input.description,
      key_code: input.key_code,
      addPermissionIds: input.addPermissionIds,
      removePermissionIds: input.removePermissionIds,
      updated_by: userId,
    });

    // Após atualizar, retornar a view completa (merge com todas as permissions)
    const full = await this.findById(input.id, userRoles);
    if (!full) throw new Error('Role not found after update');
    return full;
  }

  async delete(id: string, userId: string): Promise<RoleModel> {
    const role = await this.roleRepository.findById(id);
    if (!role) {
      throw new Error('Role not found');
    }
    if (role.is_fixed) {
      throw new Error('Cannot delete fixed roles');
    }
    const deletedRole = await this.roleRepository.delete(id, userId);
    return this.toModel(deletedRole);
  }

  async findById(id: string, userRoles: string[]): Promise<RoleModel | null> {
    // Queremos retornar todas as permissões existentes no sistema
    // e indicar se cada uma está selecionada para a role solicitada.
    const { role, permissions } = await this.roleRepository.findByIdWithAllPermissions(id, userRoles);
    if (!role) return null;

  // Monta a lista de permissões com o campo `is_selected` e `is_essential` (quando aplicável)
  const permsWithSelected = permissions.map((p) => ({
      id: p.id,
      name: p.name,
      description: p.description,
      key_code: p.key_code,
      resolver_name: p.resolver_name,
      group: p.group as any,
      created_at: p.created_at,
      updated_at: p.updated_at,
      created_by: p.created_by,
      updated_by: p.updated_by,
      is_deleted: p.is_deleted,
      deleted_at: p.deleted_at,
      deleted_by: p.deleted_by,
      disabled_to_client: p.disabled_to_client,
      // is_selected se existe um role_permission para essa role
      is_selected: Array.isArray(p.role_permissions) && p.role_permissions.length > 0,
      // se selecionada, podemos usar o is_essential do primeiro role_permission relacionado
      is_essential: p.role_permissions && p.role_permissions[0] ? p.role_permissions[0].is_essential : false,
    }));

    // Agrupa e retorna no formato do RoleModel, preservando `is_fixed`
    const grouped: Record<string, any[]> = {};
    for (const perm of permsWithSelected) {
      const groupCandidate = perm.group;
      const group = typeof groupCandidate === 'string' && groupCandidate.length > 0 ? groupCandidate : 'OUTRO';
      if (!grouped[group]) grouped[group] = [];
      grouped[group].push(perm);
    }

    const isFixed = (role as unknown as { is_fixed?: boolean }).is_fixed ?? false;

    return {
      id: role.id,
      name: role.name,
      description: role.description,
      key_code: role.key_code,
      is_fixed: isFixed,
      permissions: Object.entries(grouped).map(([group, perms]) => ({ group, data: perms })),
    } as RoleModel;
  }

  async findAll(userId: string, userRoles: string[]): Promise<RoleModel[]> {
    const roles = await this.roleRepository.findAll(userId, userRoles);
    return roles.map((role) => this.toModel(role));
  }
  async getUserIdsByRole(roleId: string): Promise<RoleAssignmentModel[]> {
    const userIds = (await this.roleRepository.getUserRolesByRoleId(roleId));
    return userIds;
  }

  // Agrupa permissions por group
  private toModel(role: Role): RoleModel {
    const permissions = Array.isArray(role.role_permissions)
    ? role.role_permissions.map((rp) => ({...rp.permission, is_essential: rp.is_essential})).filter((p) => !!p)
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
      is_fixed: role.is_fixed,
      permissions: Object.entries(grouped).map(([group, perms]) => {
        return { group, data: perms };
      }),
    };
  }
}
