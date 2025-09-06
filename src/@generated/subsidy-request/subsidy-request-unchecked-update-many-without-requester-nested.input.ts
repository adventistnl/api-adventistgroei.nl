import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutRequesterInput } from './subsidy-request-create-without-requester.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutRequesterInput } from './subsidy-request-create-or-connect-without-requester.input';
import { SubsidyRequestUpsertWithWhereUniqueWithoutRequesterInput } from './subsidy-request-upsert-with-where-unique-without-requester.input';
import { SubsidyRequestCreateManyRequesterInputEnvelope } from './subsidy-request-create-many-requester-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateWithWhereUniqueWithoutRequesterInput } from './subsidy-request-update-with-where-unique-without-requester.input';
import { SubsidyRequestUpdateManyWithWhereWithoutRequesterInput } from './subsidy-request-update-many-with-where-without-requester.input';
import { SubsidyRequestScalarWhereInput } from './subsidy-request-scalar-where.input';

@InputType()
export class SubsidyRequestUncheckedUpdateManyWithoutRequesterNestedInput {

    @Field(() => [SubsidyRequestCreateWithoutRequesterInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutRequesterInput)
    create?: Array<SubsidyRequestCreateWithoutRequesterInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutRequesterInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutRequesterInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutRequesterInput>;

    @Field(() => [SubsidyRequestUpsertWithWhereUniqueWithoutRequesterInput], {nullable:true})
    @Type(() => SubsidyRequestUpsertWithWhereUniqueWithoutRequesterInput)
    upsert?: Array<SubsidyRequestUpsertWithWhereUniqueWithoutRequesterInput>;

    @Field(() => SubsidyRequestCreateManyRequesterInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyRequesterInputEnvelope)
    createMany?: SubsidyRequestCreateManyRequesterInputEnvelope;

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

    @Field(() => [SubsidyRequestUpdateWithWhereUniqueWithoutRequesterInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateWithWhereUniqueWithoutRequesterInput)
    update?: Array<SubsidyRequestUpdateWithWhereUniqueWithoutRequesterInput>;

    @Field(() => [SubsidyRequestUpdateManyWithWhereWithoutRequesterInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithWhereWithoutRequesterInput)
    updateMany?: Array<SubsidyRequestUpdateManyWithWhereWithoutRequesterInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    deleteMany?: Array<SubsidyRequestScalarWhereInput>;
}
