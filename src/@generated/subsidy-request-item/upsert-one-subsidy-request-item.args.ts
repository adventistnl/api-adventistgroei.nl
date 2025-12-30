import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateInput } from './subsidy-request-item-create.input';
import { SubsidyRequestItemUpdateInput } from './subsidy-request-item-update.input';

@ArgsType()
export class UpsertOneSubsidyRequestItemArgs {

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemCreateInput, {nullable:false})
    @Type(() => SubsidyRequestItemCreateInput)
    create!: SubsidyRequestItemCreateInput;

    @Field(() => SubsidyRequestItemUpdateInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateInput)
    update!: SubsidyRequestItemUpdateInput;
}
