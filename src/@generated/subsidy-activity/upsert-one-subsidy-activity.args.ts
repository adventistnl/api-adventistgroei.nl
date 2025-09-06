import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyActivityCreateInput } from './subsidy-activity-create.input';
import { SubsidyActivityUpdateInput } from './subsidy-activity-update.input';

@ArgsType()
export class UpsertOneSubsidyActivityArgs {

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyActivityWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;

    @Field(() => SubsidyActivityCreateInput, {nullable:false})
    @Type(() => SubsidyActivityCreateInput)
    create!: SubsidyActivityCreateInput;

    @Field(() => SubsidyActivityUpdateInput, {nullable:false})
    @Type(() => SubsidyActivityUpdateInput)
    update!: SubsidyActivityUpdateInput;
}
