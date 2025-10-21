import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class RegionCreateDto {
  @Field()
  @IsString()
  name: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  description?: string;
}

@InputType()
export class RegionUpdateDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  description?: string;
}
