import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutChurchInput } from './subsidy-request-create-without-church.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutChurchInput } from './subsidy-request-create-or-connect-without-church.input';
import { SubsidyRequestCreateManyChurchInputEnvelope } from './subsidy-request-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestUncheckedCreateNestedManyWithoutChurchInput {

    @Field(() => [SubsidyRequestCreateWithoutChurchInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutChurchInput)
    create?: Array<SubsidyRequestCreateWithoutChurchInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutChurchInput>;

    @Field(() => SubsidyRequestCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyChurchInputEnvelope)
    createMany?: SubsidyRequestCreateManyChurchInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;
}
