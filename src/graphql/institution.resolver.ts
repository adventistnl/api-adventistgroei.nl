import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { InstitutionService } from '../services/institution.service';
import { InstitutionModel } from '../models/institution.model';
import { Institution } from '@prisma/client';
import { InstitutionCreateDto } from '../dto/institution-create.dto';

@Resolver(() => InstitutionModel)
export class InstitutionResolver {
  constructor(private readonly institutionService: InstitutionService) {}

  @Mutation(() => InstitutionModel)
  async createInstitution(
    @Args('data') data: InstitutionCreateDto,
    @Context() context: { userId: string },
  ): Promise<Institution> {
    const userId = context.userId;
    return await this.institutionService.createInstitution(data, userId);
  }

  @Query(() => [InstitutionModel])
  async institutions(): Promise<Institution[]> {
    return await this.institutionService.getInstitutions();
  }

  @Query(() => InstitutionModel, { nullable: true })
  async institution(@Args('id') id: string): Promise<Institution | null> {
    return await this.institutionService.getInstitutionById(id);
  }
}
