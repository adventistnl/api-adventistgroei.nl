import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentWhereInput } from './department-where.input';

@InputType()
export class DepartmentScalarRelationFilter {

    @Field(() => DepartmentWhereInput, {nullable:true})
    is?: DepartmentWhereInput;

    @Field(() => DepartmentWhereInput, {nullable:true})
    isNot?: DepartmentWhereInput;
}
