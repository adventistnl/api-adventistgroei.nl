import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutProjectInput } from './subsidy-request-create-without-project.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutProjectInput } from './subsidy-request-create-or-connect-without-project.input';
import { SubsidyRequestCreateManyProjectInputEnvelope } from './subsidy-request-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestCreateNestedManyWithoutProjectInput {

    @Field(() => [SubsidyRequestCreateWithoutProjectInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutProjectInput)
    create?: Array<SubsidyRequestCreateWithoutProjectInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutProjectInput>;

    @Field(() => SubsidyRequestCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyProjectInputEnvelope)
    createMany?: SubsidyRequestCreateManyProjectInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;
}
