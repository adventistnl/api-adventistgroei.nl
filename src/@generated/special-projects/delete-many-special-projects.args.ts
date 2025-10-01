import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpecialProjectsWhereInput } from './special-projects-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManySpecialProjectsArgs {

    @Field(() => SpecialProjectsWhereInput, {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    where?: SpecialProjectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
