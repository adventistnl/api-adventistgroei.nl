import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ChurchWhereUniqueInput } from './church-where-unique.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutContactInput } from './church-update-without-contact.input';
import { ChurchCreateWithoutContactInput } from './church-create-without-contact.input';

@InputType()
export class ChurchUpsertWithWhereUniqueWithoutContactInput {

    @Field(() => ChurchWhereUniqueInput, {nullable:false})
    @Type(() => ChurchWhereUniqueInput)
    where!: Prisma.AtLeast<ChurchWhereUniqueInput, 'id' | 'leader_id'>;

    @Field(() => ChurchUpdateWithoutContactInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutContactInput)
    update!: ChurchUpdateWithoutContactInput;

    @Field(() => ChurchCreateWithoutContactInput, {nullable:false})
    @Type(() => ChurchCreateWithoutContactInput)
    create!: ChurchCreateWithoutContactInput;
}
