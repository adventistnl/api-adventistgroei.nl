import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { Type } from 'class-transformer';
import { SpecialProjectsUpdateWithoutProjectInput } from './special-projects-update-without-project.input';

@InputType()
export class SpecialProjectsUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:false})
    @Type(() => SpecialProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;

    @Field(() => SpecialProjectsUpdateWithoutProjectInput, {nullable:false})
    @Type(() => SpecialProjectsUpdateWithoutProjectInput)
    data!: SpecialProjectsUpdateWithoutProjectInput;
}
