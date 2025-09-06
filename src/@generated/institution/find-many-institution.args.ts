import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionOrderByWithRelationInput } from './institution-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InstitutionScalarFieldEnum } from './institution-scalar-field.enum';

@ArgsType()
export class FindManyInstitutionArgs {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => [InstitutionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InstitutionOrderByWithRelationInput>;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InstitutionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InstitutionScalarFieldEnum}`>;
}
