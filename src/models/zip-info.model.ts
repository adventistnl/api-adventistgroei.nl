import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ZipInfo {
  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => String, { nullable: true })
  province?: string;
}
