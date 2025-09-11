import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class AddProjectVoluntaryDto {
  @Field()
  @IsString()
  project_id: string;

  @Field()
  @IsString()
  user_id: string;
}

@InputType()
export class RemoveProjectVoluntaryDto {
  @Field()
  @IsString()
  project_id: string;

  @Field()
  @IsString()
  user_id: string;
}
