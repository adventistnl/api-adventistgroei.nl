import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDocumentsWhereInput } from './activity-documents-where.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsOrderByWithRelationInput } from './activity-documents-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActivityDocumentsScalarFieldEnum } from './activity-documents-scalar-field.enum';

@ArgsType()
export class FindFirstActivityDocumentsOrThrowArgs {

    @Field(() => ActivityDocumentsWhereInput, {nullable:true})
    @Type(() => ActivityDocumentsWhereInput)
    where?: ActivityDocumentsWhereInput;

    @Field(() => [ActivityDocumentsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActivityDocumentsOrderByWithRelationInput>;

    @Field(() => ActivityDocumentsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ActivityDocumentsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ActivityDocumentsScalarFieldEnum}`>;
}
