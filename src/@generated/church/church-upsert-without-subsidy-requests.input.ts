import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutSubsidy_requestsInput } from './church-update-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutSubsidy_requestsInput } from './church-create-without-subsidy-requests.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutSubsidy_requestsInput {

    @Field(() => ChurchUpdateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutSubsidy_requestsInput)
    update!: ChurchUpdateWithoutSubsidy_requestsInput;

    @Field(() => ChurchCreateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutSubsidy_requestsInput)
    create!: ChurchCreateWithoutSubsidy_requestsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
