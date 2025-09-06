import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestListRelationFilter {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    every?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    some?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    none?: SubsidyRequestWhereInput;
}
