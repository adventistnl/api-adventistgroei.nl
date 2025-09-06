import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContactCreateInput } from './contact-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContactArgs {

    @Field(() => ContactCreateInput, {nullable:false})
    @Type(() => ContactCreateInput)
    data!: ContactCreateInput;
}
