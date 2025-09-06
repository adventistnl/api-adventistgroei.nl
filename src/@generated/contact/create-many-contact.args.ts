import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContactCreateManyInput } from './contact-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContactArgs {

    @Field(() => [ContactCreateManyInput], {nullable:false})
    @Type(() => ContactCreateManyInput)
    data!: Array<ContactCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
