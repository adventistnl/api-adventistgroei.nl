import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdjustmentTaskCreateManyAdjustmentInput } from './adjustment-task-create-many-adjustment.input';
import { Type } from 'class-transformer';

@InputType()
export class AdjustmentTaskCreateManyAdjustmentInputEnvelope {

    @Field(() => [AdjustmentTaskCreateManyAdjustmentInput], {nullable:false})
    @Type(() => AdjustmentTaskCreateManyAdjustmentInput)
    data!: Array<AdjustmentTaskCreateManyAdjustmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
