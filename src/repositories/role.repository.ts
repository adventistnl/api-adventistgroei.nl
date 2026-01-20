import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Role } from '../@generated/role/role.model';

@Injectable()
export class RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    name: string;
    description: string;
    key_code: string;
    permissionIds?: string[];
    created_by: string;
  }): Promise<Role> {
    return this.prisma.role.create({
      data: {
        name: data.name,
        description: data.description,
        key_code: data.key_code,
        created_by: data.created_by,
        updated_by: data.created_by,
        role_permissions: data.permissionIds && data.permissionIds.length > 0
          ? {
              create: data.permissionIds.map((permissionId) => ({
                permission_id: permissionId,
                created_by: data.created_by,
                updated_by: data.created_by,
              })),
            }
          : undefined,
      },
      include: {
        role_permissions: true,
      },
    });
  }

  async update(id: string, data: {
    name?: string;
    description?: string;
    key_code?: string;
    addPermissionIds?: string[];
    removePermissionIds?: string[];
    updated_by: string;
  }): Promise<Role> {
    // Atualiza dados básicos
    await this.prisma.role.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        key_code: data.key_code,
        updated_by: data.updated_by,
      },
    });

    // Atualiza permissões incrementalmente
    if (data.addPermissionIds && data.addPermissionIds.length > 0) {
      // Busca permissões já conectadas à role
      const existingPermissions = await this.prisma.rolePermission.findMany({
        where: { role_id: id },
        select: { permission_id: true, is_essential: true },
      });

      const existingPermissionIds = existingPermissions.map((p) => p.permission_id);

      // Filtra permissões que ainda não estão conectadas
      const newPermissions = data.addPermissionIds.filter(
        (permissionId) => !existingPermissionIds.includes(permissionId),
      );

      // Adiciona apenas permissões novas
      if (newPermissions.length > 0) {
        await this.prisma.rolePermission.createMany({
          data: newPermissions.map((permissionId) => ({
            role_id: id,
            permission_id: permissionId,
            created_by: data.updated_by,
            updated_by: data.updated_by,
          })),
          skipDuplicates: true, // evita erro caso já exista a relação
        });
      }
    }

    if (data.removePermissionIds && data.removePermissionIds.length > 0) {
      await this.prisma.rolePermission.deleteMany({
        where: {
          role_id: id,
          permission_id: { in: data.removePermissionIds },
          is_essential: false, // só remove se não for essencial
        },
      });
    }

    return (await this.prisma.role.findUnique({
      where: { id },
      include: { role_permissions: { include: { permission: true } } },
    }))!;
  }

  async delete(id: string, deleted_by: string): Promise<Role> {
    return this.prisma.role.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by,
      },
    });
  }

  async findById(id: string): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: { id },
      include: {
        role_permissions: {
          include: { permission: true },
        },
      },
    });
  }

  async findByIdWithPermissions(id: string): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: { id },
      include: {
        role_permissions: {
          include: { permission: true },
        },
      },
    });
  }

  /**
   * Retorna a role junto com todas as permissões disponíveis no sistema.
   * Cada permissão inclui a relação role_permissions apenas para a role passada
   * para que possamos saber se ela está selecionada e se é essencial.
   */
  async findByIdWithAllPermissions(id: string, userRoles: string[]): Promise<{
    role: Role | null;
    permissions: Array<
      (import('@prisma/client').Permission & {
        role_permissions: Array<import('@prisma/client').RolePermission>;
      })
    >;
  }> {
  const role = await this.prisma.role.findUnique({ where: { id } });

    const permissions = await this.prisma.permission.findMany({
      where: { is_deleted: false, disabled_to_client: userRoles.includes('dev') ? undefined : false },
      include: {
  // trazemos apenas os role_permissions relacionados com a role para marcar is_selected/is_essential
        role_permissions: {
          where: { role_id: id },
        },
      },
    });

    return { role, permissions };
  }

  async findAll(_userId: string, userRoles: string[]): Promise<Role[]> {
    // Se o usuário tem a role DEV, retorna todas as roles
    // Caso contrário, exclui a role DEV da lista
    const whereCondition = userRoles.includes('DEV')
      ? { is_deleted: false }
      : {
          is_deleted: false,
          key_code: { not: 'DEV' },
        };

    const res = await this.prisma.role.findMany({
      where: whereCondition,
      include: {
        role_permissions: {
          include: { permission: true },
        },
        user_roles: true,
      },
    });
    return res;
  }

  async getUserRolesByRoleId(roleId: string): Promise<Array<{ user_id: string; is_deleted: boolean }>> {
    // Busca todos os vínculos e faz join para pegar o is_deleted do usuário
    const userRoles = await this.prisma.userRole.findMany({
      where: { role_id: roleId },
      select: {
        user_id: true,
        user: { select: { is_deleted: true } },
      },
    });
    // Retorna no formato desejado
    return userRoles.map(ur => ({ user_id: ur.user_id, is_deleted: ur.user.is_deleted }));
  }
  
}
