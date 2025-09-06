import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissionProjectWhereInput } from './mission-project-where.input';
import { Type } from 'class-transformer';
import { MissionProjectOrderByWithRelationInput } from './mission-project-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { MissionProjectWhereUniqueInput } from './mission-project-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MissionProjectScalarFieldEnum } from './mission-project-scalar-field.enum';

@ArgsType()
export class FindManyMissionProjectArgs {

    @Field(() => MissionProjectWhereInput, {nullable:true})
    @Type(() => MissionProjectWhereInput)
    where?: MissionProjectWhereInput;

    @Field(() => [MissionProjectOrderByWithRelationInput], {nullable:true})
    @Type(() => MissionProjectOrderByWithRelationInput)
    orderBy?: Array<MissionProjectOrderByWithRelationInput>;

    @Field(() => MissionProjectWhereUniqueInput, {nullable:true})
    @Type(() => MissionProjectWhereUniqueInput)
    cursor?: Prisma.AtLeast<MissionProjectWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MissionProjectScalarFieldEnum], {nullable:true})
    distinct?: Array<`${MissionProjectScalarFieldEnum}`>;
}
