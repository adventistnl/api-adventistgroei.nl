import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutChurchInput } from './subsidy-request-create-without-church.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutChurchInput } from './subsidy-request-create-or-connect-without-church.input';
import { SubsidyRequestUpsertWithWhereUniqueWithoutChurchInput } from './subsidy-request-upsert-with-where-unique-without-church.input';
import { SubsidyRequestCreateManyChurchInputEnvelope } from './subsidy-request-create-many-church-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateWithWhereUniqueWithoutChurchInput } from './subsidy-request-update-with-where-unique-without-church.input';
import { SubsidyRequestUpdateManyWithWhereWithoutChurchInput } from './subsidy-request-update-many-with-where-without-church.input';
import { SubsidyRequestScalarWhereInput } from './subsidy-request-scalar-where.input';

@InputType()
export class SubsidyRequestUpdateManyWithoutChurchNestedInput {

    @Field(() => [SubsidyRequestCreateWithoutChurchInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutChurchInput)
    create?: Array<SubsidyRequestCreateWithoutChurchInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutChurchInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutChurchInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutChurchInput>;

    @Field(() => [SubsidyRequestUpsertWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => SubsidyRequestUpsertWithWhereUniqueWithoutChurchInput)
    upsert?: Array<SubsidyRequestUpsertWithWhereUniqueWithoutChurchInput>;

    @Field(() => SubsidyRequestCreateManyChurchInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyChurchInputEnvelope)
    createMany?: SubsidyRequestCreateManyChurchInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestUpdateWithWhereUniqueWithoutChurchInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateWithWhereUniqueWithoutChurchInput)
    update?: Array<SubsidyRequestUpdateWithWhereUniqueWithoutChurchInput>;

    @Field(() => [SubsidyRequestUpdateManyWithWhereWithoutChurchInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithWhereWithoutChurchInput)
    updateMany?: Array<SubsidyRequestUpdateManyWithWhereWithoutChurchInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    deleteMany?: Array<SubsidyRequestScalarWhereInput>;
}
