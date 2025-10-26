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
      await this.prisma.rolePermission.createMany({
        data: data.addPermissionIds.map((permissionId) => ({
          role_id: id,
          permission_id: permissionId,
          created_by: data.updated_by,
          updated_by: data.updated_by,
          is_essential: false, // Novas permissões não são essenciais
        })),
        skipDuplicates: true, // evita erro caso já exista a relação
      });
    }

    if (data.removePermissionIds && data.removePermissionIds.length > 0) {
      await this.prisma.rolePermission.deleteMany({
        where: {
          role_id: id,
          permission_id: { in: data.removePermissionIds },
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
  async findByIdWithAllPermissions(id: string): Promise<{
    role: Role | null;
    permissions: Array<
      (import('@prisma/client').Permission & {
        role_permissions: Array<import('@prisma/client').RolePermission>;
      })
    >;
  }> {
  const role = await this.prisma.role.findUnique({ where: { id } });

    const permissions = await this.prisma.permission.findMany({
      where: { is_deleted: false, disabled_to_client: false },
      include: {
  // trazemos apenas os role_permissions relacionados com a role para marcar is_selected/is_essential
        role_permissions: {
          where: { role_id: id },
        },
      },
    });

    return { role, permissions };
  }

  async findAll(userId: string): Promise<Role[]> {
    const res = await this.prisma.role.findMany({
      where: {
        AND: [
          { is_deleted: false },
          {
            OR: [
              { key_code: { not: 'dev' } }, // Inclui todas as roles exceto 'dev'
              {
                user_roles: {
                  some: {
                    user_id: userId,
                    role: { key_code: 'dev' }, // Inclui 'dev' apenas se o usuário tiver essa role
                  },
                },
              },
            ],
          },
        ],
      },
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
