import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { MissionProjectService } from '../services/mission-project.service';
import { MissionProject } from '../@generated/mission-project/mission-project.model';
import { MissionProjectCreateDto, MissionProjectUpdateDto } from '../dto/mission-project.dto';

@Resolver(() => MissionProject)
export class MissionProjectResolver {
  constructor(private readonly missionProjectService: MissionProjectService) {}

  @Query(() => [MissionProject])
  async missionProjects(): Promise<MissionProject[]> {
    return this.missionProjectService.findAll();
  }

  @Query(() => MissionProject, { nullable: true })
  async missionProject(@Args('id') id: string): Promise<MissionProject | null> {
    return this.missionProjectService.findById(id);
  }

  @Mutation(() => MissionProject)
  async createMissionProject(
    @Args('data') data: MissionProjectCreateDto,
    @Context() context: { userId: string },
  ): Promise<MissionProject> {
    return this.missionProjectService.create(data, context.userId);
  }

  @Mutation(() => MissionProject)
  async updateMissionProject(
    @Args('id') id: string,
    @Args('data') data: MissionProjectUpdateDto,
    @Context() context: { userId: string },
  ): Promise<MissionProject> {
    return this.missionProjectService.update(id, data, context.userId);
  }

  @Mutation(() => MissionProject)
  async deleteMissionProject(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<MissionProject> {
    return this.missionProjectService.delete(id, context.userId);
  }
}
