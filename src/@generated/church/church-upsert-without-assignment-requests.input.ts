import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutAssignment_requestsInput } from './church-update-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutAssignment_requestsInput } from './church-create-without-assignment-requests.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutAssignment_requestsInput {

    @Field(() => ChurchUpdateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutAssignment_requestsInput)
    update!: ChurchUpdateWithoutAssignment_requestsInput;

    @Field(() => ChurchCreateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutAssignment_requestsInput)
    create!: ChurchCreateWithoutAssignment_requestsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
