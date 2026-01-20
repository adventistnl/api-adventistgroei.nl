import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { Type } from 'class-transformer';
import { SpecialProjectsUpdateWithoutProjectInput } from './special-projects-update-without-project.input';
import { SpecialProjectsCreateWithoutProjectInput } from './special-projects-create-without-project.input';

@InputType()
export class SpecialProjectsUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:false})
    @Type(() => SpecialProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;

    @Field(() => SpecialProjectsUpdateWithoutProjectInput, {nullable:false})
    @Type(() => SpecialProjectsUpdateWithoutProjectInput)
    update!: SpecialProjectsUpdateWithoutProjectInput;

    @Field(() => SpecialProjectsCreateWithoutProjectInput, {nullable:false})
    @Type(() => SpecialProjectsCreateWithoutProjectInput)
    create!: SpecialProjectsCreateWithoutProjectInput;
}
