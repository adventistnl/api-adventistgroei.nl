import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityWhereInput } from './subsidy-activity-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyActivityListRelationFilter {

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    every?: SubsidyActivityWhereInput;

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    some?: SubsidyActivityWhereInput;

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    none?: SubsidyActivityWhereInput;
}
