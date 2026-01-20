import { Resolver, Mutation, Args, Query, Context, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';
import { User } from 'src/@generated/user/user.model';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';
import { ContactService } from '../services/contact.service';
import { InstitutionService } from '../services/institution.service';
import { ChurchService } from '../services/church.service';
import { Contact } from 'src/@generated/contact/contact.model';
import { Institution } from 'src/@generated/institution/institution.model';
import { Church } from 'src/@generated/church/church.model';
import { UserWithRoles } from '../models';

@Resolver(() => UserModel)
@UseGuards(PermissionsGuard)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly contactService: ContactService,
    private readonly institutionService: InstitutionService,
    private readonly churchService: ChurchService,
  ) {}

  @Mutation(() => UserModel)
  async createUser(
    @Args('data') data: UserCreateDto,
  ): Promise<Omit<User, 'password'>> {
    return await this.userService.createUser(data);
  }

  @Permission()
  @Query(() => [UserModel])
  async users(
    @Args('institution_id', { nullable: true }) institution_id?: string
  ): Promise<Omit<User, 'password'>[]> {
    if (institution_id) {
      return await this.userService.getUsersByInstitution(institution_id);
    }
    return await this.userService.getUsers();
  }

  @Permission()
  @Query(() => UserModel, { nullable: true })
  async user(@Args('id') id: string): Promise<Omit<User, 'password'> | null> {
    return await this.userService.getUserById(id);
  }

  @Query(() => UserWithRoles, { nullable: true })
  async userWithRoles(@Args('id') id: string): Promise<UserWithRoles | null> {
    return await this.userService.getUserByIdWithRoles(id);
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
  async updateOwnUser(
    @Args('data') data: UserUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Omit<User, 'password'>> {
    const userId = context.userId;
    return await this.userService.updateUser(userId, data, userId);
  }

  @Permission()
  @Mutation(() => UserModel)
  async updateUserDepartment(
    @Args('userId') userId: string,
    @Context() context: { userId: string },
    @Args('departmentId', { type: () => String, nullable: true }) departmentId?: string,
  ): Promise<Omit<User, 'password'>> {
    const requester_id = context.userId;
    return await this.userService.updateUser(userId, { department_id: departmentId || undefined }, requester_id);
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

  @ResolveField(() => Contact, { nullable: true })
  async contact(@Parent() user: UserModel): Promise<Contact | null> {
    if (!user.contact_id) return null;
    return await this.contactService.getContactById(user.contact_id);
  }

  @ResolveField(() => Church, { nullable: true })
  async church(@Parent() user: UserModel): Promise<Church | null> {
    if (!user.church_id) return null;
    return await this.churchService.getChurchByIdSafe(user.church_id);
  }
}

@Resolver(() => User)
export class UserGeneratedResolver {
  constructor(
    private readonly contactService: ContactService,
    private readonly institutionService: InstitutionService,
    private readonly churchService: ChurchService,
  ) {}

  @ResolveField(() => Contact, { nullable: true })
  async contact(@Parent() user: User): Promise<Contact | null> {
    if (!user.contact_id) return null;
    return await this.contactService.getContactById(user.contact_id);
  }

  @ResolveField(() => Institution)
  async institution(@Parent() user: User): Promise<Institution> {
    return await this.institutionService.getInstitutionById(user.institution_id);
  }

  @ResolveField(() => Church, { nullable: true })
  async church(@Parent() user: User): Promise<Church | null> {
    if (!user.church_id) return null;
    return await this.churchService.getChurchByIdSafe(user.church_id);
  }
}
