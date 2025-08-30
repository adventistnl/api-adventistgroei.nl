import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { UserCreateDto } from '../dto/user-create.dto';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/middlewares/permissions.guard';
import { Permission } from 'src/middlewares/permissions.decorator';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(PermissionsGuard)
  @Permission()
  @Query(() => [UserModel])
  async users(): Promise<UserModel[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Query(() => UserModel, { nullable: true })
  async user(@Args('id') id: string): Promise<UserModel | null> {
    return await this.userService.findById(id);
  }

  @Mutation(() => UserModel)
  async createUser(@Args('data') data: UserCreateDto): Promise<UserModel> {
    return await this.userService.create(data);
  }
}
