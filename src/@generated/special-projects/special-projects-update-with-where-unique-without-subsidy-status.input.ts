import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { Type } from 'class-transformer';
import { SpecialProjectsUpdateWithoutSubsidy_statusInput } from './special-projects-update-without-subsidy-status.input';

@InputType()
export class SpecialProjectsUpdateWithWhereUniqueWithoutSubsidy_statusInput {

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:false})
    @Type(() => SpecialProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;

    @Field(() => SpecialProjectsUpdateWithoutSubsidy_statusInput, {nullable:false})
    @Type(() => SpecialProjectsUpdateWithoutSubsidy_statusInput)
    data!: SpecialProjectsUpdateWithoutSubsidy_statusInput;
}
