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
      if (!user) {
        throw new CustomGraphQLError('User not found', ErrorCode.UNAUTHORIZED, 401);
      }
      const userRoles = await prisma.userRole.findMany({
        where: { user_id: userId },
        select: { role: { select: { key_code: true } } },
      });
      // You can extend the returned context with user roles or other info if needed
      return { userId, userRoles: userRoles.flatMap(ur => ur.role.key_code) };
    } catch {
      console.error('Failed to verify token', token);
      throw new CustomGraphQLError('Failed to verify token', ErrorCode.UNAUTHORIZED, 401);
    }
  }

  // If there's no Authorization header, explicitly return undefined.
  return undefined;
}
