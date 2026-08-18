import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutAssignment_requestsInput } from './institution-update-without-assignment-requests.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutAssignment_requestsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAssignment_requestsInput)
    data!: InstitutionUpdateWithoutAssignment_requestsInput;
}
