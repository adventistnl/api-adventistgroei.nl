import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutRegionInput } from './church-update-without-region.input';

@InputType()
export class ChurchUpdateWithWhereUniqueWithoutRegionInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateWithoutRegionInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutRegionInput)
    data!: ChurchUpdateWithoutRegionInput;
}
