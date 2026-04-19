import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionWhereInput } from './institution-position-where.input';

@InputType()
export class InstitutionPositionListRelationFilter {

    @Field(() => InstitutionPositionWhereInput, {nullable:true})
    every?: InstitutionPositionWhereInput;

    @Field(() => InstitutionPositionWhereInput, {nullable:true})
    some?: InstitutionPositionWhereInput;

    @Field(() => InstitutionPositionWhereInput, {nullable:true})
    none?: InstitutionPositionWhereInput;
}
