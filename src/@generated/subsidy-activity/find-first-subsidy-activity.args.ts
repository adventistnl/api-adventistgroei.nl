import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyActivityWhereInput } from './subsidy-activity-where.input';
import { Type } from 'class-transformer';
import { SubsidyActivityOrderByWithRelationInput } from './subsidy-activity-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyActivityScalarFieldEnum } from './subsidy-activity-scalar-field.enum';

@ArgsType()
export class FindFirstSubsidyActivityArgs {

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    where?: SubsidyActivityWhereInput;

    @Field(() => [SubsidyActivityOrderByWithRelationInput], {nullable:true})
    @Type(() => SubsidyActivityOrderByWithRelationInput)
    orderBy?: Array<SubsidyActivityOrderByWithRelationInput>;

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    cursor?: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubsidyActivityScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SubsidyActivityScalarFieldEnum}`>;
}
