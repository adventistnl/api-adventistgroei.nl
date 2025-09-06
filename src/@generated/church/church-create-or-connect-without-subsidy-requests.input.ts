import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutSubsidy_requestsInput } from './church-create-without-subsidy-requests.input';

@InputType()
export class ChurchCreateOrConnectWithoutSubsidy_requestsInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchCreateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutSubsidy_requestsInput)
    create!: ChurchCreateWithoutSubsidy_requestsInput;
}
