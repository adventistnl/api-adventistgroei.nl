import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { User } from '@prisma/client';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => UserModel)
@UseGuards(PermissionsGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Permission()
  @Mutation(() => UserModel)
  async createUser(
    @Args('data') data: UserCreateDto,
    @Context() context: { userId: string },
  ): Promise<User> {
    const userId = context.userId;
    return await this.userService.createUser(data, userId);
  }

  @Permission()
  @Query(() => [UserModel])
  async users(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Permission()
  @Query(() => UserModel, { nullable: true })
  async user(@Args('id') id: string): Promise<User | null> {
    return await this.userService.getUserById(id);
  }

  @Permission()
  @Mutation(() => UserModel)
  async updateUser(
    @Args('data') data: UserUpdateDto,
    @Context() context: { userId: string },
  ): Promise<User> {
    const userId = context.userId;
    return await this.userService.updateUser(data, userId);
  }

  @Permission()
  @Mutation(() => UserModel)
  async deleteUser(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<User> {
    const userId = context.userId;
    return await this.userService.deleteUser(id, userId);
  }
}
