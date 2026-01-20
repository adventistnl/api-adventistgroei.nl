import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutSpecial_projectsInput } from './subsidy-status-create-without-special-projects.input';

@InputType()
export class SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusCreateWithoutSpecial_projectsInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutSpecial_projectsInput)
    create!: SubsidyStatusCreateWithoutSpecial_projectsInput;
}
