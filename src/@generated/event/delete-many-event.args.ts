import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EventWhereInput } from './event-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyEventArgs {

    @Field(() => EventWhereInput, {nullable:true})
    @Type(() => EventWhereInput)
    where?: EventWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
