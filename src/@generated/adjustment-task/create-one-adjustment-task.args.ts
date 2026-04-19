import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdjustmentTaskCreateInput } from './adjustment-task-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAdjustmentTaskArgs {

    @Field(() => AdjustmentTaskCreateInput, {nullable:false})
    @Type(() => AdjustmentTaskCreateInput)
    data!: AdjustmentTaskCreateInput;
}
