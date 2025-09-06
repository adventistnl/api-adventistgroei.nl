import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyInstitutionInput } from './user-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCreateManyInstitutionInputEnvelope {

    @Field(() => [UserCreateManyInstitutionInput], {nullable:false})
    @Type(() => UserCreateManyInstitutionInput)
    data!: Array<UserCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
