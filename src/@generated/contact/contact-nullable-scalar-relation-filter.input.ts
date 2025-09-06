import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';

@InputType()
export class ContactNullableScalarRelationFilter {

    @Field(() => ContactWhereInput, {nullable:true})
    is?: ContactWhereInput;

    @Field(() => ContactWhereInput, {nullable:true})
    isNot?: ContactWhereInput;
}
