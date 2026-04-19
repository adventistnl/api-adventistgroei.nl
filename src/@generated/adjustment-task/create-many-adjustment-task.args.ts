import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdjustmentTaskCreateManyInput } from './adjustment-task-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAdjustmentTaskArgs {

    @Field(() => [AdjustmentTaskCreateManyInput], {nullable:false})
    @Type(() => AdjustmentTaskCreateManyInput)
    data!: Array<AdjustmentTaskCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
