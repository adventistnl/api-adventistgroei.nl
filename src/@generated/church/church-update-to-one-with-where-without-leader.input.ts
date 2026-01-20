import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutLeaderInput } from './church-update-without-leader.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutLeaderInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutLeaderInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutLeaderInput)
    data!: ChurchUpdateWithoutLeaderInput;
}
