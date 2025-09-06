import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionNullableScalarRelationFilter {

    @Field(() => InstitutionWhereInput, {nullable:true})
    is?: InstitutionWhereInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    isNot?: InstitutionWhereInput;
}
