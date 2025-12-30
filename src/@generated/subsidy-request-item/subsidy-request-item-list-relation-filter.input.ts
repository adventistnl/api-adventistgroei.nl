import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemWhereInput } from './subsidy-request-item-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestItemListRelationFilter {

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    every?: SubsidyRequestItemWhereInput;

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    some?: SubsidyRequestItemWhereInput;

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    none?: SubsidyRequestItemWhereInput;
}
