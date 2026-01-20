import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PrismaService } from '../services/prisma.service';
import { PERMISSIONS_KEY } from './permissions.decorator';
import { PermissionResolverName } from '@prisma/client';
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

    // Verifica se o usuário tem as permissões necessárias
    const hasPermission = requiredPermissions.some((p) => userPermissions.includes(p));

    if (!hasPermission) {
      // Caso especial: se a permissão necessária é 'updateUser' 
      // e o usuário possui 'updateOwnUser', verificar se está tentando atualizar a si mesmo
      if (requiredPermissions.includes('updateUser' as PermissionResolverName) && userPermissions.includes('updateOwnUser' as PermissionResolverName)) {
        const targetUserId = this.extractTargetUserId(context);
        if (targetUserId === userId) {
          return true; // Permite atualizar seu próprio perfil
        }
      }
      
      throw new UnauthorizedException('User does not have permission to access this resource');
    }

    return true;
  }

  /**
   * Extrai o ID do usuário alvo da operação (para verificações de self-update)
   */
  private extractTargetUserId(context: ExecutionContext): string | undefined {
    const contextType = context.getType<string>();

    if (contextType === 'graphql') {
      const gqlContext = GqlExecutionContext.create(context);
      const args: any = gqlContext.getArgs();
      // Tenta pegar o ID de diferentes formas possíveis nos argumentos
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const id = args.id || args.userId;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const dataId = args.data && typeof args.data === 'object' && 'id' in args.data ? (args.data as Record<string, unknown>).id : undefined;
      return (id || dataId) as string | undefined;
    } else {
      const request: any = context.switchToHttp().getRequest();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const paramsId = request.params && typeof request.params === 'object' && 'id' in request.params ? (request.params as Record<string, unknown>).id : undefined;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const bodyId = request.body && typeof request.body === 'object' && 'id' in request.body ? (request.body as Record<string, unknown>).id : undefined;
      return (paramsId || bodyId) as string | undefined;
    }
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
      const request: any = context.switchToHttp().getRequest();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const user = request.user && typeof request.user === 'object' && 'userId' in request.user ? (request.user as Record<string, unknown>).userId : undefined;
      return user as string | undefined;
    }
  }
}

export * from './jwt.strategy';
