import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchUpdateInput } from './church-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';

@ArgsType()
export class UpdateOneChurchArgs {

    @Field(() => ChurchUpdateInput, {nullable:false})
    @Type(() => ChurchUpdateInput)
    data!: ChurchUpdateInput;

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;
}
