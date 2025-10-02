import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDocumentsWhereInput } from './activity-documents-where.input';

@InputType()
export class ActivityDocumentsListRelationFilter {

    @Field(() => ActivityDocumentsWhereInput, {nullable:true})
    every?: ActivityDocumentsWhereInput;

    @Field(() => ActivityDocumentsWhereInput, {nullable:true})
    some?: ActivityDocumentsWhereInput;

    @Field(() => ActivityDocumentsWhereInput, {nullable:true})
    none?: ActivityDocumentsWhereInput;
}
