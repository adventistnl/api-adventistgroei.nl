import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyActivityUpdateInput } from './subsidy-activity-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';

@ArgsType()
export class UpdateOneSubsidyActivityArgs {

    @Field(() => SubsidyActivityUpdateInput, {nullable:false})
    @Type(() => SubsidyActivityUpdateInput)
    data!: SubsidyActivityUpdateInput;

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyActivityWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;
}
