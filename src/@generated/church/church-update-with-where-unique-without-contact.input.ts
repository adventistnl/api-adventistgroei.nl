import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutContactInput } from './church-update-without-contact.input';

@InputType()
export class ChurchUpdateWithWhereUniqueWithoutContactInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id'>;

    @Field(() => ChurchUpdateWithoutContactInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutContactInput)
    data!: ChurchUpdateWithoutContactInput;
}
