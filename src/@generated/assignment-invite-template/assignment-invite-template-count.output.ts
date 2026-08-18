import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AssignmentInviteTemplateCount {

    @Field(() => Int, {nullable:false})
    requests?: number;
}
