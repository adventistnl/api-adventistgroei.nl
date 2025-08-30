export interface IGqlContext {
  req: IGqlRequest;
  userId?: string;
}
export interface IGqlRequest {
  headers: Record<string, string | string[]>;
}
