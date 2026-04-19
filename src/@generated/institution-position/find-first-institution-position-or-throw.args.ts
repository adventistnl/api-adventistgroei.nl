import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionPositionWhereInput } from './institution-position-where.input';
import { Type } from 'class-transformer';
import { InstitutionPositionOrderByWithRelationInput } from './institution-position-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';
import { Int } from '@nestjs/graphql';
import { InstitutionPositionScalarFieldEnum } from './institution-position-scalar-field.enum';

@ArgsType()
export class FindFirstInstitutionPositionOrThrowArgs {

    @Field(() => InstitutionPositionWhereInput, {nullable:true})
    @Type(() => InstitutionPositionWhereInput)
    where?: InstitutionPositionWhereInput;

    @Field(() => [InstitutionPositionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<InstitutionPositionOrderByWithRelationInput>;

    @Field(() => InstitutionPositionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [InstitutionPositionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${InstitutionPositionScalarFieldEnum}`>;
}
