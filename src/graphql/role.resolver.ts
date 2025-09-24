import { Resolver, Query, Mutation, Args, Context, ResolveField, Parent } from '@nestjs/graphql';
import { RoleService } from '../services/role.service';
import { CreateRoleInput, UpdateRoleInput } from '../dto/role.dto';
import { RoleAssignmentModel, RoleModel } from '../models/role.model';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => RoleModel)
@UseGuards(PermissionsGuard)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Mutation(() => RoleModel)
  @Permission()
  async createRole(
    @Args('input') input: CreateRoleInput,
    @Context() ctx: { userId?: string },
  ): Promise<RoleModel> {
    return this.roleService.create(input, ctx.userId!);
  }

  @Mutation(() => RoleModel)
  @Permission()
  async updateRole(
    @Args('input') input: UpdateRoleInput,
    @Context() ctx: { userId?: string },
  ): Promise<RoleModel> {
    return this.roleService.update(input, ctx.userId!);
  }

  @Mutation(() => RoleModel)
  @Permission()
  async deleteRole(
    @Args('id') id: string,
    @Context() ctx: { userId?: string },
  ): Promise<RoleModel> {
    return this.roleService.delete(id, ctx.userId!);
  }

  @Query(() => [RoleModel])
  @Permission()
  async roles(): Promise<RoleModel[]> {
    return this.roleService.findAll();
  }

  @Query(() => RoleModel, { nullable: true })
  @Permission()
  async role(@Args('id') id: string): Promise<RoleModel | null> {
    return this.roleService.findById(id);
  }

  @ResolveField(() => [RoleAssignmentModel], { nullable: 'itemsAndList' })
  async users(@Parent() role: RoleModel): Promise<RoleAssignmentModel[]> {
    return this.roleService.getUserIdsByRole(role.id);
  }
}
