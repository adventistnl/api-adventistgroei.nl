import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProjectAdjustmentScalarRelationFilter } from '../project-adjustment/project-adjustment-scalar-relation-filter.input';

@InputType()
export class AdjustmentTaskWhereInput {

    @Field(() => [AdjustmentTaskWhereInput], {nullable:true})
    AND?: Array<AdjustmentTaskWhereInput>;

    @Field(() => [AdjustmentTaskWhereInput], {nullable:true})
    OR?: Array<AdjustmentTaskWhereInput>;

    @Field(() => [AdjustmentTaskWhereInput], {nullable:true})
    NOT?: Array<AdjustmentTaskWhereInput>;

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

    @Field(() => ProjectAdjustmentScalarRelationFilter, {nullable:true})
    adjustment?: ProjectAdjustmentScalarRelationFilter;
}
