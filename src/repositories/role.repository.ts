import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Role } from '@prisma/client';

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
    permissionIds?: string[];
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
    // Atualiza permissões (remove todas e recria)
    if (data.permissionIds) {
      await this.prisma.rolePermission.deleteMany({ where: { role_id: id } });
      await this.prisma.rolePermission.createMany({
        data: data.permissionIds.map((permissionId) => ({
          role_id: id,
          permission_id: permissionId,
          created_by: data.updated_by,
          updated_by: data.updated_by,
        })),
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

  async findAll(userId: string): Promise<Role[]> {
    // Obtenha todas as roles do usuário
    const userRoles = await this.prisma.userRole.findMany({
      where: { user_id: userId },
      select: { role: true },
    });

    // Extraia os key_codes das roles do usuário
    const userRoleKeyCodes = userRoles.map((userRole) => userRole.role.key_code);

    // Obtenha todas as roles disponíveis
    const allRoles = await this.prisma.role.findMany({
      where: { is_deleted: false },
      include: {
        role_permissions: {
          include: { permission: true },
        },
        user_roles: { select: { user_id: true, is_deleted: false }},
      },
    });

    // Filtre a role 'dev' com base na presença do key_code no usuário
    return allRoles.filter((role) => {
      if (role.key_code === 'dev') {
        return userRoleKeyCodes.includes('dev');
      }
      return true;
    });
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
