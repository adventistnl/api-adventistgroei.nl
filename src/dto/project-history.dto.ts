import { InputType, Field } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProjectHistoryType } from 'src/@generated/prisma/project-history-type.enum';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class ProjectHistoryCreateDto {
  @Field()
  @IsString()
  project_id: string;

  @Field(() => ProjectHistoryType)
  @IsEnum(ProjectHistoryType)
  type: ProjectHistoryType;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  comment?: string;

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

  @Field(() => GraphQLJSON, { nullable: true })
  @IsOptional()
  metadata?: any;
}
