import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutRegionInput } from './church-create-without-region.input';

@InputType()
export class ChurchCreateOrConnectWithoutRegionInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchCreateWithoutRegionInput, {nullable:false})
    @Type(() => ChurchCreateWithoutRegionInput)
    create!: ChurchCreateWithoutRegionInput;
}
