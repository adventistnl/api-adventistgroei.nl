import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateWithoutSubsidy_requestsInput } from './church-create-without-subsidy-requests.input';
import { Type } from 'class-transformer';
import { ChurchCreateOrConnectWithoutSubsidy_requestsInput } from './church-create-or-connect-without-subsidy-requests.input';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@InputType()
export class ChurchCreateNestedOneWithoutSubsidy_requestsInput {

    @Field(() => ChurchCreateWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => ChurchCreateWithoutSubsidy_requestsInput)
    create?: ChurchCreateWithoutSubsidy_requestsInput;

    @Field(() => ChurchCreateOrConnectWithoutSubsidy_requestsInput, {nullable:true})
    @Type(() => ChurchCreateOrConnectWithoutSubsidy_requestsInput)
    connectOrCreate?: ChurchCreateOrConnectWithoutSubsidy_requestsInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:true})
    @Type(() => ChurchWhereUniqueInput)
    connect?: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;
}
