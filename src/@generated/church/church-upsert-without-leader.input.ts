import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutLeaderInput } from './church-update-without-leader.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutLeaderInput } from './church-create-without-leader.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutLeaderInput {

    @Field(() => ChurchUpdateWithoutLeaderInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutLeaderInput)
    update!: ChurchUpdateWithoutLeaderInput;

    @Field(() => ChurchCreateWithoutLeaderInput, {nullable:false})
    @Type(() => ChurchCreateWithoutLeaderInput)
    create!: ChurchCreateWithoutLeaderInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
