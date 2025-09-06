import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutRequesterInput } from './subsidy-request-create-without-requester.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutRequesterInput } from './subsidy-request-create-or-connect-without-requester.input';
import { SubsidyRequestCreateManyRequesterInputEnvelope } from './subsidy-request-create-many-requester-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestCreateNestedManyWithoutRequesterInput {

    @Field(() => [SubsidyRequestCreateWithoutRequesterInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutRequesterInput)
    create?: Array<SubsidyRequestCreateWithoutRequesterInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutRequesterInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutRequesterInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutRequesterInput>;

    @Field(() => SubsidyRequestCreateManyRequesterInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyRequesterInputEnvelope)
    createMany?: SubsidyRequestCreateManyRequesterInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;
}
