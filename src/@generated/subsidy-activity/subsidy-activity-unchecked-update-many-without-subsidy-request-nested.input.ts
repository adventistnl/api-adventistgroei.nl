import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityCreateWithoutSubsidy_requestInput } from './subsidy-activity-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput } from './subsidy-activity-create-or-connect-without-subsidy-request.input';
import { SubsidyActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput } from './subsidy-activity-upsert-with-where-unique-without-subsidy-request.input';
import { SubsidyActivityCreateManySubsidy_requestInputEnvelope } from './subsidy-activity-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';
import { SubsidyActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput } from './subsidy-activity-update-with-where-unique-without-subsidy-request.input';
import { SubsidyActivityUpdateManyWithWhereWithoutSubsidy_requestInput } from './subsidy-activity-update-many-with-where-without-subsidy-request.input';
import { SubsidyActivityScalarWhereInput } from './subsidy-activity-scalar-where.input';

@InputType()
export class SubsidyActivityUncheckedUpdateManyWithoutSubsidy_requestNestedInput {

    @Field(() => [SubsidyActivityCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyActivityCreateWithoutSubsidy_requestInput)
    create?: Array<SubsidyActivityCreateWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput)
    upsert?: Array<SubsidyActivityUpsertWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => SubsidyActivityCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => SubsidyActivityCreateManySubsidy_requestInputEnvelope)
    createMany?: SubsidyActivityCreateManySubsidy_requestInputEnvelope;

    @Field(() => [SubsidyActivityWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyActivityWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyActivityWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyActivityWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput)
    update?: Array<SubsidyActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyActivityUpdateManyWithWhereWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyActivityUpdateManyWithWhereWithoutSubsidy_requestInput)
    updateMany?: Array<SubsidyActivityUpdateManyWithWhereWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyActivityScalarWhereInput], {nullable:true})
    @Type(() => SubsidyActivityScalarWhereInput)
    deleteMany?: Array<SubsidyActivityScalarWhereInput>;
}
