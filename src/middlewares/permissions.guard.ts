import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
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

    // Detectar tipo de contexto (GraphQL ou HTTP)
    const userId = this.extractUserId(context);

    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

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

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const userPermissions: PermissionResolverName[] = user.user_roles
      .flatMap((ur) => ur.role.role_permissions)
      .map((rp) => rp.permission.resolver_name);

    const hasPermission = requiredPermissions.some((p) => userPermissions.includes(p));

    if (!hasPermission) {
      throw new UnauthorizedException('User does not have permission to access this resource');
    }

    return true;
  }

  /**
   * Extrai userId tanto de contexto GraphQL quanto HTTP/REST
   */
  private extractUserId(context: ExecutionContext): string | undefined {
    const contextType = context.getType<string>();

    if (contextType === 'graphql') {
      // Contexto GraphQL
      const gqlContext = GqlExecutionContext.create(context);
      const ctx = gqlContext.getContext<IGqlContext>();
      return ctx.userId;
    } else {
      // Contexto HTTP/REST
      const request = context.switchToHttp().getRequest();
      return request.user?.userId;
    }
  }
}

export * from './jwt.strategy';
