import { Resolver, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PermissionService } from '../services';
import { PermissionGroupPermissionsModel } from '../models/role.model';
import { Permission as PermissionDecorator, PermissionsGuard } from '../middlewares';

@Resolver(() => PermissionGroupPermissionsModel)
@UseGuards(PermissionsGuard)
export class PermissionResolver {
  constructor(private readonly permissionService: PermissionService) {}

  @Query(() => [PermissionGroupPermissionsModel])
  @PermissionDecorator()
  async permissions(): Promise<PermissionGroupPermissionsModel[]> {
    return await this.permissionService.findAllGrouped();
  }
}
