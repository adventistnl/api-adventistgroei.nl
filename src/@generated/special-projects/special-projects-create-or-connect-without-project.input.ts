import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { Type } from 'class-transformer';
import { SpecialProjectsCreateWithoutProjectInput } from './special-projects-create-without-project.input';

@InputType()
export class SpecialProjectsCreateOrConnectWithoutProjectInput {

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:false})
    @Type(() => SpecialProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;

    @Field(() => SpecialProjectsCreateWithoutProjectInput, {nullable:false})
    @Type(() => SpecialProjectsCreateWithoutProjectInput)
    create!: SpecialProjectsCreateWithoutProjectInput;
}
