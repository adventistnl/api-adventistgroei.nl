import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpecialProjectsWhereInput } from './special-projects-where.input';
import { Type } from 'class-transformer';
import { SpecialProjectsOrderByWithRelationInput } from './special-projects-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SpecialProjectsScalarFieldEnum } from './special-projects-scalar-field.enum';

@ArgsType()
export class FindFirstSpecialProjectsOrThrowArgs {

    @Field(() => SpecialProjectsWhereInput, {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    where?: SpecialProjectsWhereInput;

    @Field(() => [SpecialProjectsOrderByWithRelationInput], {nullable:true})
    @Type(() => SpecialProjectsOrderByWithRelationInput)
    orderBy?: Array<SpecialProjectsOrderByWithRelationInput>;

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:true})
    @Type(() => SpecialProjectsWhereUniqueInput)
    cursor?: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SpecialProjectsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${SpecialProjectsScalarFieldEnum}`>;
}
