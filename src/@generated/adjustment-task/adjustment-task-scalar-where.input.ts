import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AdjustmentTaskScalarWhereInput {

    @Field(() => [AdjustmentTaskScalarWhereInput], {nullable:true})
    AND?: Array<AdjustmentTaskScalarWhereInput>;

    @Field(() => [AdjustmentTaskScalarWhereInput], {nullable:true})
    OR?: Array<AdjustmentTaskScalarWhereInput>;

    @Field(() => [AdjustmentTaskScalarWhereInput], {nullable:true})
    NOT?: Array<AdjustmentTaskScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    adjustment_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    completed?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    position?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;
}
