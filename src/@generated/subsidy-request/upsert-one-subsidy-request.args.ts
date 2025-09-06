import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateInput } from './subsidy-request-create.input';
import { SubsidyRequestUpdateInput } from './subsidy-request-update.input';

@ArgsType()
export class UpsertOneSubsidyRequestArgs {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateInput, {nullable:false})
    @Type(() => SubsidyRequestCreateInput)
    create!: SubsidyRequestCreateInput;

    @Field(() => SubsidyRequestUpdateInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateInput)
    update!: SubsidyRequestUpdateInput;
}
