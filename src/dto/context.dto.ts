
export class ContextDto {
  userId: string;
  userRoles: string[];
  userPermissions: string[];
  req: {
    headers: Record<string, string>;
    cookies?: Record<string, string>;
  };
  res?: any;
}