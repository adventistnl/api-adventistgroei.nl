import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactUpdateWithoutUserInput } from './contact-update-without-user.input';

@InputType()
export class ContactUpdateToOneWithWhereWithoutUserInput {

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => ContactUpdateWithoutUserInput, {nullable:false})
    @Type(() => ContactUpdateWithoutUserInput)
    data!: ContactUpdateWithoutUserInput;
}
