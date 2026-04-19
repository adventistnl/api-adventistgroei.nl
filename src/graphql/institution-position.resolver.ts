import { Resolver, Mutation, Args, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { InstitutionPositionService } from '../services/institution-position.service';
import { UserService } from '../services/user.service';
import { InstitutionPosition } from 'src/@generated/institution-position/institution-position.model';
import { InstitutionPositionCreateDto, InstitutionPositionUpdateDto } from '../dto/institution-position.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { User } from 'src/@generated/user/user.model';

@Resolver(() => InstitutionPosition)
@UseGuards(PermissionsGuard)
export class InstitutionPositionResolver {
  constructor(
    private readonly institutionPositionService: InstitutionPositionService,
    private readonly userService: UserService,
  ) {}

  @Permission()
  @Query(() => [InstitutionPosition])
  async institutionPositions(
    @Args('institution_id') institution_id: string,
  ): Promise<InstitutionPosition[]> {
    return this.institutionPositionService.getPositions(institution_id);
  }

  @Permission()
  @Query(() => InstitutionPosition, { nullable: true })
  async institutionPosition(@Args('id') id: string): Promise<InstitutionPosition> {
    return this.institutionPositionService.getPositionById(id);
  }

  @Permission()
  @Mutation(() => InstitutionPosition)
  async createInstitutionPosition(
    @Args('data') data: InstitutionPositionCreateDto,
    @Context() context: { userId: string },
  ): Promise<InstitutionPosition> {
    return this.institutionPositionService.createPosition(data, context.userId);
  }

  @Permission()
  @Mutation(() => InstitutionPosition)
  async updateInstitutionPosition(
    @Args('id') id: string,
    @Args('data') data: InstitutionPositionUpdateDto,
    @Context() context: { userId: string },
  ): Promise<InstitutionPosition> {
    return this.institutionPositionService.updatePosition(id, data, context.userId);
  }

  @Permission()
  @Mutation(() => InstitutionPosition)
  async deleteInstitutionPosition(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<InstitutionPosition> {
    return this.institutionPositionService.deletePosition(id, context.userId);
  }

  @ResolveField(() => User, { nullable: true })
  async user(@Parent() position: InstitutionPosition): Promise<User | null> {
    if (!position.user_id) return null;
    return this.userService.getUserById(position.user_id) as unknown as User;
  }
}
