import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleWhereInput } from './availability-recurrence-rule-where.input';
import { Type } from 'class-transformer';
import { AvailabilityRecurrenceRuleOrderByWithRelationInput } from './availability-recurrence-rule-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AvailabilityRecurrenceRuleWhereUniqueInput } from './availability-recurrence-rule-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AvailabilityRecurrenceRuleScalarFieldEnum } from './availability-recurrence-rule-scalar-field.enum';

@ArgsType()
export class FindManyAvailabilityRecurrenceRuleArgs {

    @Field(() => AvailabilityRecurrenceRuleWhereInput, {nullable:true})
    @Type(() => AvailabilityRecurrenceRuleWhereInput)
    where?: AvailabilityRecurrenceRuleWhereInput;

    @Field(() => [AvailabilityRecurrenceRuleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AvailabilityRecurrenceRuleOrderByWithRelationInput>;

    @Field(() => AvailabilityRecurrenceRuleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AvailabilityRecurrenceRuleWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AvailabilityRecurrenceRuleScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AvailabilityRecurrenceRuleScalarFieldEnum}`>;
}
