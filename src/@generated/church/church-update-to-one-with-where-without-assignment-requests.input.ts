import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutAssignment_requestsInput } from './church-update-without-assignment-requests.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutAssignment_requestsInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutAssignment_requestsInput)
    data!: ChurchUpdateWithoutAssignment_requestsInput;
}
