import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../services/prisma.service';
import { PERMISSIONS_KEY } from './permissions.decorator';
import type { PermissionResolverName } from '@prisma/client';
import type { IGqlContext } from '../types/global';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<
      PermissionResolverName[]
    >(PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);
    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }
    const ctx: IGqlContext = context.getArgByIndex(2);
    const userId = ctx.userId;
    if (!userId) return false;
    // Busca as permissões do usuário via Prisma
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        user_roles: {
          include: {
            role: {
              include: {
                role_permissions: {
                  include: { permission: true },
                },
              },
            },
          },
        },
      },
    });
    if (!user) return false;
    const userPermissions: PermissionResolverName[] = user.user_roles
      .flatMap((ur) => ur.role.role_permissions)
      .map((rp) => rp.permission.resolver_name);
    return requiredPermissions.some((p) => userPermissions.includes(p));
  }
}
