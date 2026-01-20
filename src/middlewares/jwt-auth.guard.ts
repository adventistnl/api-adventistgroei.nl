import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('JwtAuthGuard - canActivate called');
    const request = context.switchToHttp().getRequest();
    console.log('Request headers:', request.headers);
    const token = this.extractTokenFromHeader(request);
    console.log('Extracted token:', token ? 'Token found' : 'No token');

    if (!token) {
      console.log('No token provided - throwing error');
      throw new UnauthorizedException('No token provided');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });

      console.log('JWT Payload:', payload);

      // JWT usa 'sub' para o subject (userId)
      request.user = {
        userId: payload.sub || payload.userId,  // Tenta 'sub' primeiro, depois 'userId'
        userRoles: payload.userRoles || payload.roles || [],  // Tenta 'userRoles' ou 'roles'
      };

      console.log('Request user set:', request.user);
    } catch (error) {
      console.error('JWT verification failed:', error.message);
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
