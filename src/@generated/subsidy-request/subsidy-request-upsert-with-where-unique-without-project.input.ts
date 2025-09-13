import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutProjectInput } from './subsidy-request-update-without-project.input';
import { SubsidyRequestCreateWithoutProjectInput } from './subsidy-request-create-without-project.input';

@InputType()
export class SubsidyRequestUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateWithoutProjectInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutProjectInput)
    update!: SubsidyRequestUpdateWithoutProjectInput;

    @Field(() => SubsidyRequestCreateWithoutProjectInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutProjectInput)
    create!: SubsidyRequestCreateWithoutProjectInput;
}
