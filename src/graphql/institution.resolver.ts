import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { InstitutionService } from '../services/institution.service';
import { InstitutionModel } from '../models/institution.model';
import { Institution } from '@prisma/client';
import {
  InstitutionCreateDto,
  InstitutionUpdateDto,
} from '../dto/institution.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => InstitutionModel)
@UseGuards(PermissionsGuard)
export class InstitutionResolver {
  constructor(private readonly institutionService: InstitutionService) {}

  @Permission()
  @Mutation(() => InstitutionModel)
  async createInstitution(
    @Args('data') data: InstitutionCreateDto,
    @Context() context: { userId: string },
  ): Promise<Institution> {
    const userId = context.userId;
    return await this.institutionService.createInstitution(data, userId);
  }

  @Permission()
  @Query(() => [InstitutionModel])
  async institutions(): Promise<Institution[]> {
    return await this.institutionService.getInstitutions();
  }

  @Permission()
  @Query(() => InstitutionModel, { nullable: true })
  async institution(@Args('id') id: string): Promise<Institution | null> {
    return await this.institutionService.getInstitutionById(id);
  }

  @Permission()
  @Mutation(() => InstitutionModel)
  async updateInstitution(
    @Args('data') data: InstitutionUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Institution> {
    const userId = context.userId;
    return await this.institutionService.updateInstitution(data, userId);
  }

  @Permission()
  @Mutation(() => InstitutionModel)
  async deleteInstitution(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Institution> {
    const userId = context.userId;
    return await this.institutionService.deleteInstitution(id, userId);
  }
}
