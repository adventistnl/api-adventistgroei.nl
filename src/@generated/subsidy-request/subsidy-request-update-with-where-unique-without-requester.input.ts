import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutRequesterInput } from './subsidy-request-update-without-requester.input';

@InputType()
export class SubsidyRequestUpdateWithWhereUniqueWithoutRequesterInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateWithoutRequesterInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutRequesterInput)
    data!: SubsidyRequestUpdateWithoutRequesterInput;
}
