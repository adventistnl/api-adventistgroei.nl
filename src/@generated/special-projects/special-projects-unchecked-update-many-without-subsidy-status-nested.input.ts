import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsCreateWithoutSubsidy_statusInput } from './special-projects-create-without-subsidy-status.input';
import { Type } from 'class-transformer';
import { SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput } from './special-projects-create-or-connect-without-subsidy-status.input';
import { SpecialProjectsUpsertWithWhereUniqueWithoutSubsidy_statusInput } from './special-projects-upsert-with-where-unique-without-subsidy-status.input';
import { SpecialProjectsCreateManySubsidy_statusInputEnvelope } from './special-projects-create-many-subsidy-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { SpecialProjectsUpdateWithWhereUniqueWithoutSubsidy_statusInput } from './special-projects-update-with-where-unique-without-subsidy-status.input';
import { SpecialProjectsUpdateManyWithWhereWithoutSubsidy_statusInput } from './special-projects-update-many-with-where-without-subsidy-status.input';
import { SpecialProjectsScalarWhereInput } from './special-projects-scalar-where.input';

@InputType()
export class SpecialProjectsUncheckedUpdateManyWithoutSubsidy_statusNestedInput {

    @Field(() => [SpecialProjectsCreateWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SpecialProjectsCreateWithoutSubsidy_statusInput)
    create?: Array<SpecialProjectsCreateWithoutSubsidy_statusInput>;

    @Field(() => [SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput)
    connectOrCreate?: Array<SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput>;

    @Field(() => [SpecialProjectsUpsertWithWhereUniqueWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SpecialProjectsUpsertWithWhereUniqueWithoutSubsidy_statusInput)
    upsert?: Array<SpecialProjectsUpsertWithWhereUniqueWithoutSubsidy_statusInput>;

    @Field(() => SpecialProjectsCreateManySubsidy_statusInputEnvelope, {nullable:true})
    @Type(() => SpecialProjectsCreateManySubsidy_statusInputEnvelope)
    createMany?: SpecialProjectsCreateManySubsidy_statusInputEnvelope;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;

    @Field(() => [SpecialProjectsUpdateWithWhereUniqueWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SpecialProjectsUpdateWithWhereUniqueWithoutSubsidy_statusInput)
    update?: Array<SpecialProjectsUpdateWithWhereUniqueWithoutSubsidy_statusInput>;

    @Field(() => [SpecialProjectsUpdateManyWithWhereWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SpecialProjectsUpdateManyWithWhereWithoutSubsidy_statusInput)
    updateMany?: Array<SpecialProjectsUpdateManyWithWhereWithoutSubsidy_statusInput>;

    @Field(() => [SpecialProjectsScalarWhereInput], {nullable:true})
    @Type(() => SpecialProjectsScalarWhereInput)
    deleteMany?: Array<SpecialProjectsScalarWhereInput>;
}
