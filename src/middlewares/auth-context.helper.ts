import * as jwt from 'jsonwebtoken';
import { CustomGraphQLError, ErrorCode } from 'src/common/errors/custom-graphql-error';

export function getUserIdFromRequest(req: { headers: Record<string, string> }): string | null {
  const JWT_SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, JWT_SECRET!) as { sub?: string };
      return decoded.sub ?? null;
    } catch {
      console.error('Failed to verify token', token);
      throw new CustomGraphQLError('Failed to verify token', ErrorCode.UNAUTHORIZED, 401);
    }
  }
  return null;
}
