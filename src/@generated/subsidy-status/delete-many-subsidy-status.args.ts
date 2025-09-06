import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySubsidyStatusArgs {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
