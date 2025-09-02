import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { UserCreateDto } from '../dto/user-create.dto';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/middlewares/permissions.guard';
import { Permission } from 'src/middlewares/permissions.decorator';

@Resolver(() => UserModel)
@UseGuards(PermissionsGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Permission()
  @Query(() => [UserModel])
  async users(): Promise<UserModel[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Permission()
  @Query(() => UserModel, { nullable: true })
  async user(@Args('id') id: string): Promise<UserModel | null> {
    return await this.userService.findById(id);
  }

  @Permission()
  @Mutation(() => UserModel)
  async createUser(@Args('data') data: UserCreateDto): Promise<UserModel> {
    return await this.userService.create(data);
  }
}
