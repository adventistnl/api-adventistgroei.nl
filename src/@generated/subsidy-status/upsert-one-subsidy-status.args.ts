import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateInput } from './subsidy-status-create.input';
import { SubsidyStatusUpdateInput } from './subsidy-status-update.input';

@ArgsType()
export class UpsertOneSubsidyStatusArgs {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusCreateInput, {nullable:false})
    @Type(() => SubsidyStatusCreateInput)
    create!: SubsidyStatusCreateInput;

    @Field(() => SubsidyStatusUpdateInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateInput)
    update!: SubsidyStatusUpdateInput;
}
