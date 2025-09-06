import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityWhereInput } from './subsidy-activity-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyActivityScalarRelationFilter {

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    is?: SubsidyActivityWhereInput;

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    isNot?: SubsidyActivityWhereInput;
}
