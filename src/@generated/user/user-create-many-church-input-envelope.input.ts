import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyChurchInput } from './user-create-many-church.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyChurchInputEnvelope {

    @Field(() => [UserCreateManyChurchInput], {nullable:false})
    @Type(() => UserCreateManyChurchInput)
    data!: Array<UserCreateManyChurchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
