import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutSubsidy_requestsInput } from './institution-update-without-subsidy-requests.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutSubsidy_requestsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutSubsidy_requestsInput)
    data!: InstitutionUpdateWithoutSubsidy_requestsInput;
}
