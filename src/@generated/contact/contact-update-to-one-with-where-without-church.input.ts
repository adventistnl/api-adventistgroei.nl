import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactUpdateWithoutChurchInput } from './contact-update-without-church.input';

@InputType()
export class ContactUpdateToOneWithWhereWithoutChurchInput {

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => ContactUpdateWithoutChurchInput, {nullable:false})
    @Type(() => ContactUpdateWithoutChurchInput)
    data!: ContactUpdateWithoutChurchInput;
}
