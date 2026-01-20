import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemWhereInput } from './subsidy-request-item-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestItemNullableScalarRelationFilter {

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    is?: SubsidyRequestItemWhereInput;

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    isNot?: SubsidyRequestItemWhereInput;
}
