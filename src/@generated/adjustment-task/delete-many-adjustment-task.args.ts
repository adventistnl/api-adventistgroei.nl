import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdjustmentTaskWhereInput } from './adjustment-task-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyAdjustmentTaskArgs {

    @Field(() => AdjustmentTaskWhereInput, {nullable:true})
    @Type(() => AdjustmentTaskWhereInput)
    where?: AdjustmentTaskWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
