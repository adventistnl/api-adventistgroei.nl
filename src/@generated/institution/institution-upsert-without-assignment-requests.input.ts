import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutAssignment_requestsInput } from './institution-update-without-assignment-requests.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAssignment_requestsInput } from './institution-create-without-assignment-requests.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutAssignment_requestsInput {

    @Field(() => InstitutionUpdateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAssignment_requestsInput)
    update!: InstitutionUpdateWithoutAssignment_requestsInput;

    @Field(() => InstitutionCreateWithoutAssignment_requestsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAssignment_requestsInput)
    create!: InstitutionCreateWithoutAssignment_requestsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
