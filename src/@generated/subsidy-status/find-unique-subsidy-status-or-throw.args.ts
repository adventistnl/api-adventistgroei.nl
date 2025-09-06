import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSubsidyStatusOrThrowArgs {

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyStatusWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;
}
