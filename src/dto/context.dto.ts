
export class ContextDto {
  userId: string;
  userRoles: string[];
  req: {
    headers: Record<string, string>;
  };
}