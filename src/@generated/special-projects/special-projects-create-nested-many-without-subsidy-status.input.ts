import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsCreateWithoutSubsidy_statusInput } from './special-projects-create-without-subsidy-status.input';
import { Type } from 'class-transformer';
import { SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput } from './special-projects-create-or-connect-without-subsidy-status.input';
import { SpecialProjectsCreateManySubsidy_statusInputEnvelope } from './special-projects-create-many-subsidy-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';

@InputType()
export class SpecialProjectsCreateNestedManyWithoutSubsidy_statusInput {

    @Field(() => [SpecialProjectsCreateWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SpecialProjectsCreateWithoutSubsidy_statusInput)
    create?: Array<SpecialProjectsCreateWithoutSubsidy_statusInput>;

    @Field(() => [SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput)
    connectOrCreate?: Array<SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput>;

    @Field(() => SpecialProjectsCreateManySubsidy_statusInputEnvelope, {nullable:true})
    @Type(() => SpecialProjectsCreateManySubsidy_statusInputEnvelope)
    createMany?: SpecialProjectsCreateManySubsidy_statusInputEnvelope;

    @Field(() => [SpecialProjectsWhereUniqueInput], {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>>;
}
