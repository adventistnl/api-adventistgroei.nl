import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssignmentChurch_idDateCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    church_id!: string;

    @Field(() => Date, {nullable:false})
    date!: Date | string;
}
