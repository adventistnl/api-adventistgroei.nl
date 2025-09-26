import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionListRelationFilter {

    @Field(() => InstitutionWhereInput, {nullable:true})
    every?: InstitutionWhereInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    some?: InstitutionWhereInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    none?: InstitutionWhereInput;
}
