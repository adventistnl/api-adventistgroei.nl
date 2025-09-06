import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutSubsidy_requestsInput } from './institution-update-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutSubsidy_requestsInput } from './institution-create-without-subsidy-requests.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutSubsidy_requestsInput {

    @Field(() => InstitutionUpdateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutSubsidy_requestsInput)
    update!: InstitutionUpdateWithoutSubsidy_requestsInput;

    @Field(() => InstitutionCreateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutSubsidy_requestsInput)
    create!: InstitutionCreateWithoutSubsidy_requestsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
