import * as jwt from 'jsonwebtoken';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';
import { PrismaService } from '../services/prisma.service';

export async function getUserIdFromRequest(req: { headers: Record<string, string> }): Promise<{ userId: string; userRoles: string[] } | undefined> {
  const JWT_SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, JWT_SECRET!) as { sub?: string };
      const userId = decoded.sub;
      if (!userId) {
        throw new CustomGraphQLError('Invalid token: missing subject', ErrorCode.UNAUTHORIZED, 401);
      }
      const prisma = new PrismaService();
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user || user.is_deleted) {
        throw new CustomGraphQLError('User not found or is inactive', ErrorCode.UNAUTHORIZED, 401);
      }
      const userRoles = await prisma.userRole.findMany({
        where: { user_id: userId, role: { is_deleted: false } },
        select: { role: { select: { key_code: true } } },
      });
      if (!userRoles || userRoles.length === 0) {
        throw new CustomGraphQLError('User has no Role', ErrorCode.UNAUTHORIZED, 401);
      }
      // You can extend the returned context with user roles or other info if needed
      return { userId, userRoles: userRoles.map(ur => ur.role.key_code) };
    } catch {
      console.error('Failed to verify token', token);
      throw new CustomGraphQLError('Failed to verify token', ErrorCode.UNAUTHORIZED, 401);
    }
  }

  // If there's no Authorization header, explicitly return undefined.
  return undefined;
}
