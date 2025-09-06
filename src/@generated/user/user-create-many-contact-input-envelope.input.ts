import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyContactInput } from './user-create-many-contact.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyContactInputEnvelope {

    @Field(() => [UserCreateManyContactInput], {nullable:false})
    @Type(() => UserCreateManyContactInput)
    data!: Array<UserCreateManyContactInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
