import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyChurchArgs {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
