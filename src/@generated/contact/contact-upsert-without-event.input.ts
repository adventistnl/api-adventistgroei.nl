import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactUpdateWithoutEventInput } from './contact-update-without-event.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutEventInput } from './contact-create-without-event.input';
import { ContactWhereInput } from './contact-where.input';

@InputType()
export class ContactUpsertWithoutEventInput {

    @Field(() => ContactUpdateWithoutEventInput, {nullable:false})
    @Type(() => ContactUpdateWithoutEventInput)
    update!: ContactUpdateWithoutEventInput;

    @Field(() => ContactCreateWithoutEventInput, {nullable:false})
    @Type(() => ContactCreateWithoutEventInput)
    create!: ContactCreateWithoutEventInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;
}
