import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { User } from '../@generated/user/user.model';

export enum CollaboratorRole {
  owner = 'owner',
  co_owner = 'co_owner',
  assignee = 'assignee',
  finance = 'finance',
  requester = 'requester',
}

registerEnumType(CollaboratorRole, {
  name: 'CollaboratorRole',
  description: 'Papel do colaborador no projeto',
});

@ObjectType()
export class ProjectCollaborator {
  @Field(() => User)
  user: User;

  @Field(() => CollaboratorRole)
  role: CollaboratorRole;

  // IDs das atividades às quais esse colaborador está atribuído (apenas para role=assignee)
  @Field(() => [String], { nullable: true })
  activity_ids?: string[];
}
