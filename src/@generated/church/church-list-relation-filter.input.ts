import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchListRelationFilter {

    @Field(() => ChurchWhereInput, {nullable:true})
    every?: ChurchWhereInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    some?: ChurchWhereInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    none?: ChurchWhereInput;
}
