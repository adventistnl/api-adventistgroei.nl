import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestUpdateInput } from './subsidy-request-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@ArgsType()
export class UpdateOneSubsidyRequestArgs {

    @Field(() => SubsidyRequestUpdateInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateInput)
    data!: SubsidyRequestUpdateInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;
}
