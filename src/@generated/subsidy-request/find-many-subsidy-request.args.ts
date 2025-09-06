import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestOrderByWithRelationInput } from './subsidy-request-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SubsidyRequestScalarFieldEnum } from './subsidy-request-scalar-field.enum';

@ArgsType()
export class FindManySubsidyRequestArgs {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => [SubsidyRequestOrderByWithRelationInput], {nullable:true})
    @Type(() => SubsidyRequestOrderByWithRelationInput)
    orderBy?: Array<SubsidyRequestOrderByWithRelationInput>;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    cursor?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SubsidyRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SubsidyRequestScalarFieldEnum}`>;
}
