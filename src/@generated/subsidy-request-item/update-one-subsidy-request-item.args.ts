import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestItemUpdateInput } from './subsidy-request-item-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';

@ArgsType()
export class UpdateOneSubsidyRequestItemArgs {

    @Field(() => SubsidyRequestItemUpdateInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateInput)
    data!: SubsidyRequestItemUpdateInput;

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;
}
