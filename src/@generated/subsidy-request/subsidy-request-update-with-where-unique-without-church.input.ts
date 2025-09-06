import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutChurchInput } from './subsidy-request-update-without-church.input';

@InputType()
export class SubsidyRequestUpdateWithWhereUniqueWithoutChurchInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateWithoutChurchInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutChurchInput)
    data!: SubsidyRequestUpdateWithoutChurchInput;
}
