import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchScalarRelationFilter {

    @Field(() => ChurchWhereInput, {nullable:true})
    is?: ChurchWhereInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    isNot?: ChurchWhereInput;
}
