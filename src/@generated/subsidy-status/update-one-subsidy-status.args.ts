import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusUpdateInput } from './subsidy-status-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';

@ArgsType()
export class UpdateOneSubsidyStatusArgs {

    @Field(() => SubsidyStatusUpdateInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateInput)
    data!: SubsidyStatusUpdateInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;
}
