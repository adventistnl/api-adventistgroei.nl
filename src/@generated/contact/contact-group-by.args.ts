import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactOrderByWithAggregationInput } from './contact-order-by-with-aggregation.input';
import { ContactScalarFieldEnum } from './contact-scalar-field.enum';
import { ContactScalarWhereWithAggregatesInput } from './contact-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContactCountAggregateInput } from './contact-count-aggregate.input';
import { ContactMinAggregateInput } from './contact-min-aggregate.input';
import { ContactMaxAggregateInput } from './contact-max-aggregate.input';

@ArgsType()
export class ContactGroupByArgs {

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => [ContactOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContactOrderByWithAggregationInput>;

    @Field(() => [ContactScalarFieldEnum], {nullable:false})
    by!: Array<`${ContactScalarFieldEnum}`>;

    @Field(() => ContactScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContactScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContactCountAggregateInput, {nullable:true})
    _count?: ContactCountAggregateInput;

    @Field(() => ContactMinAggregateInput, {nullable:true})
    _min?: ContactMinAggregateInput;

    @Field(() => ContactMaxAggregateInput, {nullable:true})
    _max?: ContactMaxAggregateInput;
}
