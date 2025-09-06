import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactUpdateWithoutUserInput } from './contact-update-without-user.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutUserInput } from './contact-create-without-user.input';
import { ContactWhereInput } from './contact-where.input';

@InputType()
export class ContactUpsertWithoutUserInput {

    @Field(() => ContactUpdateWithoutUserInput, {nullable:false})
    @Type(() => ContactUpdateWithoutUserInput)
    update!: ContactUpdateWithoutUserInput;

    @Field(() => ContactCreateWithoutUserInput, {nullable:false})
    @Type(() => ContactCreateWithoutUserInput)
    create!: ContactCreateWithoutUserInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;
}
