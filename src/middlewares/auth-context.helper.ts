import * as jwt from 'jsonwebtoken';

export function getUserIdFromRequest(req: { headers: Record<string, string> }): string | null {
  const JWT_SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, JWT_SECRET!) as { sub?: string };
      console.log("decoded", decoded);
      return decoded.sub ?? null;
    } catch {
      console.error('Failed to verify token', token);
      return null;
    }
  }
  return null;
}
