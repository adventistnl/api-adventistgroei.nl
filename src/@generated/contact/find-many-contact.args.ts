import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactOrderByWithRelationInput } from './contact-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContactScalarFieldEnum } from './contact-scalar-field.enum';

@ArgsType()
export class FindManyContactArgs {

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

    @Field(() => [ContactScalarFieldEnum], {nullable:true})
    distinct?: Array<`${ContactScalarFieldEnum}`>;
}
