import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactOrderByWithRelationInput } from './contact-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContactCountAggregateInput } from './contact-count-aggregate.input';
import { ContactMinAggregateInput } from './contact-min-aggregate.input';
import { ContactMaxAggregateInput } from './contact-max-aggregate.input';

@ArgsType()
export class ContactAggregateArgs {

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => [ContactOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContactOrderByWithRelationInput>;

    @Field(() => ContactWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

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
