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

  @Mutation(() => UserModel)
  async createUser(
    @Args('data') data: UserCreateDto,
  ): Promise<Omit<User, 'password'>> {
    return await this.userService.createUser(data);
  }

  @Permission()
  @Query(() => [UserModel])
  async users(): Promise<Omit<User, 'password'>[]> {
    return await this.userService.getUsers();
  }

  @Permission()
  @Query(() => UserModel, { nullable: true })
  async user(@Args('id') id: string): Promise<Omit<User, 'password'> | null> {
    return await this.userService.getUserById(id);
  }

  @Permission()
  @Mutation(() => UserModel)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UserUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Omit<User, 'password'>> {
    const requester_id = context.userId;
    return await this.userService.updateUser(id, data, requester_id);
  }

  @Permission()
  @Mutation(() => UserModel)
  async deleteUser(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Omit<User, 'password'>> {
    const userId = context.userId;
    return await this.userService.deleteUser(id, userId);
  }

  @Permission()
  @Mutation(() => UserModel)
  async addRoleToUser(
    @Args('userId') userId: string,
    @Args('roleId') roleId: string,
    @Context() context: { userId: string },
  ): Promise<Omit<User, 'password'>> {
    const requester_id = context.userId;
    return await this.userService.addRoleToUser(userId, roleId, requester_id);
  }

  @Permission()
  @Mutation(() => UserModel)
  async removeRoleFromUser(
    @Args('userId') userId: string,
    @Args('roleId') roleId: string,
    @Context() context: { userId: string },
  ): Promise<Omit<User, 'password'>> {
    const requester_id = context.userId;
    return await this.userService.removeRoleFromUser(userId, roleId, requester_id);
  }
}
