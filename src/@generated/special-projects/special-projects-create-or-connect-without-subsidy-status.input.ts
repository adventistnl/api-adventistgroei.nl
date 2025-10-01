import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { Type } from 'class-transformer';
import { SpecialProjectsCreateWithoutSubsidy_statusInput } from './special-projects-create-without-subsidy-status.input';

@InputType()
export class SpecialProjectsCreateOrConnectWithoutSubsidy_statusInput {

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:false})
    @Type(() => SpecialProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;

    @Field(() => SpecialProjectsCreateWithoutSubsidy_statusInput, {nullable:false})
    @Type(() => SpecialProjectsCreateWithoutSubsidy_statusInput)
    create!: SpecialProjectsCreateWithoutSubsidy_statusInput;
}
