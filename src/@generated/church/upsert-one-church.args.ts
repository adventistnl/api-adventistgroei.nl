import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchCreateInput } from './church-create.input';
import { ChurchUpdateInput } from './church-update.input';

@ArgsType()
export class UpsertOneChurchArgs {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchCreateInput, {nullable:false})
    @Type(() => ChurchCreateInput)
    create!: ChurchCreateInput;

    @Field(() => ChurchUpdateInput, {nullable:false})
    @Type(() => ChurchUpdateInput)
    update!: ChurchUpdateInput;
}
