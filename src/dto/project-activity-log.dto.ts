import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsEnum } from 'class-validator';
import { ProjectActivityLogAction } from 'src/@generated/prisma/project-activity-log-action.enum';

@InputType()
export class ProjectActivityLogCreateDto {
  @Field()
  @IsString()
  activity_id: string;

  @Field()
  @IsString()
  user_id: string;

  @Field(() => ProjectActivityLogAction)
  @IsEnum(ProjectActivityLogAction)
  action: ProjectActivityLogAction;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  field_name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  old_value?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  new_value?: string;

  @Field({ nullable: true })
  @IsOptional()
  metadata?: any;
}
