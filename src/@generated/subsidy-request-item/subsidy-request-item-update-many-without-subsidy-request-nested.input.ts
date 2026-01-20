import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateWithoutSubsidy_requestInput } from './subsidy-request-item-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput } from './subsidy-request-item-create-or-connect-without-subsidy-request.input';
import { SubsidyRequestItemUpsertWithWhereUniqueWithoutSubsidy_requestInput } from './subsidy-request-item-upsert-with-where-unique-without-subsidy-request.input';
import { SubsidyRequestItemCreateManySubsidy_requestInputEnvelope } from './subsidy-request-item-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { SubsidyRequestItemUpdateWithWhereUniqueWithoutSubsidy_requestInput } from './subsidy-request-item-update-with-where-unique-without-subsidy-request.input';
import { SubsidyRequestItemUpdateManyWithWhereWithoutSubsidy_requestInput } from './subsidy-request-item-update-many-with-where-without-subsidy-request.input';
import { SubsidyRequestItemScalarWhereInput } from './subsidy-request-item-scalar-where.input';

@InputType()
export class SubsidyRequestItemUpdateManyWithoutSubsidy_requestNestedInput {

    @Field(() => [SubsidyRequestItemCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyRequestItemCreateWithoutSubsidy_requestInput)
    create?: Array<SubsidyRequestItemCreateWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyRequestItemUpsertWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyRequestItemUpsertWithWhereUniqueWithoutSubsidy_requestInput)
    upsert?: Array<SubsidyRequestItemUpsertWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => SubsidyRequestItemCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestItemCreateManySubsidy_requestInputEnvelope)
    createMany?: SubsidyRequestItemCreateManySubsidy_requestInputEnvelope;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;

    @Field(() => [SubsidyRequestItemUpdateWithWhereUniqueWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyRequestItemUpdateWithWhereUniqueWithoutSubsidy_requestInput)
    update?: Array<SubsidyRequestItemUpdateWithWhereUniqueWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyRequestItemUpdateManyWithWhereWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyRequestItemUpdateManyWithWhereWithoutSubsidy_requestInput)
    updateMany?: Array<SubsidyRequestItemUpdateManyWithWhereWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyRequestItemScalarWhereInput], {nullable:true})
    @Type(() => SubsidyRequestItemScalarWhereInput)
    deleteMany?: Array<SubsidyRequestItemScalarWhereInput>;
}
