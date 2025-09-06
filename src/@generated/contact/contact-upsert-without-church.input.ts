import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactUpdateWithoutChurchInput } from './contact-update-without-church.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutChurchInput } from './contact-create-without-church.input';
import { ContactWhereInput } from './contact-where.input';

@InputType()
export class ContactUpsertWithoutChurchInput {

    @Field(() => ContactUpdateWithoutChurchInput, {nullable:false})
    @Type(() => ContactUpdateWithoutChurchInput)
    update!: ContactUpdateWithoutChurchInput;

    @Field(() => ContactCreateWithoutChurchInput, {nullable:false})
    @Type(() => ContactCreateWithoutChurchInput)
    create!: ContactCreateWithoutChurchInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;
}
