import { Resolver, Mutation, Args, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { ChurchService } from '../services/church.service';
import { Church } from 'src/@generated/church/church.model';
import { ChurchCreateDto, ChurchUpdateDto } from '../dto/church.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { User } from 'src/@generated/user/user.model';
import { UserService } from '../services/user.service';
import GraphQLJSON from 'graphql-type-json';

@Resolver(() => Church)
@UseGuards(PermissionsGuard)
export class ChurchResolver {
  constructor(
    private readonly churchService: ChurchService,
    private readonly userService: UserService,
  ) {}

  @Permission()
  @Mutation(() => Church)
  async createChurch(
    @Args('data') data: ChurchCreateDto,
    @Context() context: { userId: string },
  ): Promise<Church> {
    const userId = context.userId;
    return await this.churchService.createChurch(data, userId);
  }

  @Permission()
  @Query(() => [Church])
  async churches(
    @Args('institution_id', { nullable: true }) institution_id?: string
  ): Promise<Church[]> {
    return await this.churchService.getChurches(institution_id);
  }

  @Permission()
  @Query(() => Church, { nullable: true })
  async church(@Args('id') id: string): Promise<Church | null> {
    return await this.churchService.getChurchById(id);
  }

  @Permission()
  @Mutation(() => Church)
  async updateChurch(
    @Args('id') id: string,
    @Args('data') data: ChurchUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Church> {
    return await this.churchService.updateChurch(id, data, context.userId);
  }

  @Permission()
  @Mutation(() => Church)
  async deleteChurch(
    @Args('id') churchId: string,
    @Context() context: { userId: string },
  ): Promise<Church> {
    const userId = context.userId;
    return await this.churchService.deleteChurch(churchId, userId);
  }

  @Permission()
  @Query(() => [GraphQLJSON])
  async churchActivityTimeline(
    @Args('institution_id', { nullable: true }) institution_id?: string,
    @Args('selectedYear', { nullable: true }) selectedYear?: number
  ): Promise<any[]> {
    return this.churchService.getChurchActivityTimeline(institution_id, selectedYear);
  }
}

@Resolver(() => Church)
export class ChurchGeneratedResolver {
  constructor(
    private readonly churchService: ChurchService,
    private readonly userService: UserService,
  ) {}

  @ResolveField(() => [User])
  async users(@Parent() church: Church): Promise<User[]> {
    return this.churchService.getUsersByChurchId(church.id) as Promise<User[]>;
  }

  @ResolveField(() => User, { nullable: true })
  async leader(@Parent() church: Church): Promise<Omit<User, 'password'> | null> {
    if (!church.leader_id) {
      return null;
    }
    return this.userService.getUserById(church.leader_id);
  }
}
