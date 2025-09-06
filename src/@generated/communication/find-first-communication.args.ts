import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationWhereInput } from './communication-where.input';
import { Type } from 'class-transformer';
import { CommunicationOrderByWithRelationInput } from './communication-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CommunicationWhereUniqueInput } from './communication-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommunicationScalarFieldEnum } from './communication-scalar-field.enum';

@ArgsType()
export class FindFirstCommunicationArgs {

    @Field(() => CommunicationWhereInput, {nullable:true})
    @Type(() => CommunicationWhereInput)
    where?: CommunicationWhereInput;

    @Field(() => [CommunicationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CommunicationOrderByWithRelationInput>;

    @Field(() => CommunicationWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CommunicationWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommunicationScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommunicationScalarFieldEnum}`>;
}
