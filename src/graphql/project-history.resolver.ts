import { Resolver, Query, Mutation, Args, Context, ID, Subscription } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { PermissionsGuard } from 'src/middlewares/permissions.guard';
import { Permission } from 'src/middlewares';
import { ProjectHistory } from 'src/@generated/project-history/project-history.model';
import { ProjectHistoryCreateDto } from 'src/dto/project-history.dto';
import { ProjectHistoryService } from 'src/services/project-history.service';
import { PubSubService } from 'src/services/pubsub.service';
import {
  PROJECT_HISTORY_ADDED,
  USER_PROJECT_HISTORY_ADDED,
} from 'src/common/constants/subscription-events';

@Resolver(() => ProjectHistory)
export class ProjectHistoryResolver {
  constructor(
    private readonly projectHistoryService: ProjectHistoryService,
    private readonly pubSubService: PubSubService,
  ) {}

  @Query(() => [ProjectHistory], { name: 'projectHistories' })
  @UseGuards(PermissionsGuard)
  @Permission('projectHistories')
  async getByProjectId(
    @Args('projectId', { type: () => ID }) projectId: string,
  ): Promise<ProjectHistory[]> {
    return this.projectHistoryService.getByProjectId(projectId);
  }

  @Mutation(() => ProjectHistory)
  @UseGuards(PermissionsGuard)
  @Permission()
  async createProjectHistory(
    @Args('data') data: ProjectHistoryCreateDto,
    @Context() context: { userId: string },
  ): Promise<ProjectHistory> {
    return this.projectHistoryService.create(data, context.userId);
  }

  @Mutation(() => ProjectHistory)
  @UseGuards(PermissionsGuard)
  @Permission()
  async deleteProjectHistory(
    @Args('id', { type: () => ID }) id: string,
    @Context() context: { userId: string },
  ): Promise<ProjectHistory> {
    return this.projectHistoryService.delete(id, context.userId);
  }

  /**
   * Subscription por projeto: clientes com o modal de histórico aberto.
   * Filtra pelo projectId — cada cliente recebe apenas eventos do projeto que está vendo.
   */
  @Subscription(() => ProjectHistory, {
    name: 'projectHistoryAdded',
    filter: (payload: { projectId: string }, variables: { projectId: string }) =>
      payload.projectId === variables.projectId,
    resolve: (payload: { projectHistoryAdded: ProjectHistory }) => payload.projectHistoryAdded,
  })
  projectHistoryAdded(
    @Args('projectId', { type: () => ID }) projectId: string,
  ) {
    return this.pubSubService.asyncIterator<{ projectHistoryAdded: ProjectHistory; projectId: string }>(
      PROJECT_HISTORY_ADDED,
    );
  }

  /**
   * Subscription global por usuário: ativa durante toda a sessão do usuário logado.
   * Filtra pelo userId — o usuário recebe notificações de qualquer projeto em que é colaborador,
   * mesmo sem a tela de histórico aberta. O frontend descarta entradas próprias.
   *
   * Colaboradores notificados: owner + co_owner + voluntários ativos do projeto.
   */
  @Subscription(() => ProjectHistory, {
    name: 'userProjectHistoryAdded',
    filter: (payload: { userId: string }, variables: { userId: string }) =>
      payload.userId === variables.userId,
    resolve: (payload: { userProjectHistoryAdded: ProjectHistory }) =>
      payload.userProjectHistoryAdded,
  })
  userProjectHistoryAdded(
    @Args('userId', { type: () => ID }) userId: string,
  ) {
    return this.pubSubService.asyncIterator<{
      userProjectHistoryAdded: ProjectHistory;
      userId: string;
    }>(USER_PROJECT_HISTORY_ADDED);
  }
}
