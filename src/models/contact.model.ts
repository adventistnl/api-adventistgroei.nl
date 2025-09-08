import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LinkContactResult {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  message?: string;
}