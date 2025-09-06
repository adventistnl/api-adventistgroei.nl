import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactUpdateWithoutEventInput } from './contact-update-without-event.input';

@InputType()
export class ContactUpdateToOneWithWhereWithoutEventInput {

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => ContactUpdateWithoutEventInput, {nullable:false})
    @Type(() => ContactUpdateWithoutEventInput)
    data!: ContactUpdateWithoutEventInput;
}
