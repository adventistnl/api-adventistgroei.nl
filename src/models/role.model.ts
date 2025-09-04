import { ObjectType, Field } from '@nestjs/graphql';
import { PermissionModel } from './permission.model';


@ObjectType()
export class RoleModel {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  key_code: string;

  @Field(() => [PermissionGroupPermissionsModel])
  permissions: PermissionGroupPermissionsModel[];
}

@ObjectType()
export class PermissionGroupPermissionsModel {
  @Field()
  group: string;

  @Field(() => [PermissionModel])
  data: PermissionModel[];
}
