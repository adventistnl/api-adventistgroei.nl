import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { Type } from 'class-transformer';
import { SpecialProjectsUpdateWithoutSubsidy_statusInput } from './special-projects-update-without-subsidy-status.input';
import { SpecialProjectsCreateWithoutSubsidy_statusInput } from './special-projects-create-without-subsidy-status.input';

@InputType()
export class SpecialProjectsUpsertWithWhereUniqueWithoutSubsidy_statusInput {

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:false})
    @Type(() => SpecialProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;

    @Field(() => SpecialProjectsUpdateWithoutSubsidy_statusInput, {nullable:false})
    @Type(() => SpecialProjectsUpdateWithoutSubsidy_statusInput)
    update!: SpecialProjectsUpdateWithoutSubsidy_statusInput;

    @Field(() => SpecialProjectsCreateWithoutSubsidy_statusInput, {nullable:false})
    @Type(() => SpecialProjectsCreateWithoutSubsidy_statusInput)
    create!: SpecialProjectsCreateWithoutSubsidy_statusInput;
}
