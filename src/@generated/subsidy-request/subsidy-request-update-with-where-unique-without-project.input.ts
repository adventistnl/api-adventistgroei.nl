import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutProjectInput } from './subsidy-request-update-without-project.input';

@InputType()
export class SubsidyRequestUpdateWithWhereUniqueWithoutProjectInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateWithoutProjectInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutProjectInput)
    data!: SubsidyRequestUpdateWithoutProjectInput;
}
