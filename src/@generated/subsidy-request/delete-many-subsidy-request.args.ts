import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySubsidyRequestArgs {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
