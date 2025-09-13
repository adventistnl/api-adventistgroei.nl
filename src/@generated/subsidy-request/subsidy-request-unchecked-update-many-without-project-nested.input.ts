import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutProjectInput } from './subsidy-request-create-without-project.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutProjectInput } from './subsidy-request-create-or-connect-without-project.input';
import { SubsidyRequestUpsertWithWhereUniqueWithoutProjectInput } from './subsidy-request-upsert-with-where-unique-without-project.input';
import { SubsidyRequestCreateManyProjectInputEnvelope } from './subsidy-request-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateWithWhereUniqueWithoutProjectInput } from './subsidy-request-update-with-where-unique-without-project.input';
import { SubsidyRequestUpdateManyWithWhereWithoutProjectInput } from './subsidy-request-update-many-with-where-without-project.input';
import { SubsidyRequestScalarWhereInput } from './subsidy-request-scalar-where.input';

@InputType()
export class SubsidyRequestUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [SubsidyRequestCreateWithoutProjectInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutProjectInput)
    create?: Array<SubsidyRequestCreateWithoutProjectInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutProjectInput>;

    @Field(() => [SubsidyRequestUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => SubsidyRequestUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<SubsidyRequestUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => SubsidyRequestCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManyProjectInputEnvelope)
    createMany?: SubsidyRequestCreateManyProjectInputEnvelope;

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

    @Field(() => [SubsidyRequestUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<SubsidyRequestUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [SubsidyRequestUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => SubsidyRequestUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<SubsidyRequestUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [SubsidyRequestScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestScalarWhereInput)
    deleteMany?: Array<SubsidyRequestScalarWhereInput>;
}
