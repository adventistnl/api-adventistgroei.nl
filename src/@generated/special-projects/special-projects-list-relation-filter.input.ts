import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsWhereInput } from './special-projects-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SpecialProjectsListRelationFilter {

    @Field(() => SpecialProjectsWhereInput, {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    every?: SpecialProjectsWhereInput;

    @Field(() => SpecialProjectsWhereInput, {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    some?: SpecialProjectsWhereInput;

    @Field(() => SpecialProjectsWhereInput, {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    none?: SpecialProjectsWhereInput;
}
