import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentTaskWhereInput } from './adjustment-task-where.input';

@InputType()
export class AdjustmentTaskListRelationFilter {

    @Field(() => AdjustmentTaskWhereInput, {nullable:true})
    every?: AdjustmentTaskWhereInput;

    @Field(() => AdjustmentTaskWhereInput, {nullable:true})
    some?: AdjustmentTaskWhereInput;

    @Field(() => AdjustmentTaskWhereInput, {nullable:true})
    none?: AdjustmentTaskWhereInput;
}
