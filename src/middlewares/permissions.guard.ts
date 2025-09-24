import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../services/prisma.service';
import { PERMISSIONS_KEY } from './permissions.decorator';
import type { PermissionResolverName } from '@prisma/client';
import type { IGqlContext } from '../types/global';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';

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
          where: { is_deleted: false },
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
    if (!user) throw new CustomGraphQLError('User not found trying to admit permission', ErrorCode.NOT_FOUND, 404);
    const userPermissions: PermissionResolverName[] = user.user_roles
    .flatMap((ur) => ur.role.role_permissions)
    .map((rp) => rp.permission.resolver_name);
    const permissions = requiredPermissions.some((p) => userPermissions.includes(p));
    if (!permissions) {
      throw new CustomGraphQLError('User does not have permission to access this resource', ErrorCode.UNAUTHORIZED, 401);
    }
    return permissions;
  }
}

export * from './jwt.strategy';
