import { SetMetadata } from '@nestjs/common';

export const PERMISSIONS_KEY = 'permissions';
export function Permission(permission?: string) {
  return (target: object, propertyKey: string, descriptor: PropertyDescriptor) => {
    const value = permission || propertyKey;
    SetMetadata(PERMISSIONS_KEY, [value])(target, propertyKey, descriptor);
  };
}
