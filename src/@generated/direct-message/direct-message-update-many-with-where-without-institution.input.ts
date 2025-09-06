import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageScalarWhereInput } from './direct-message-scalar-where.input';
import { Type } from 'class-transformer';
import { DirectMessageUpdateManyMutationInput } from './direct-message-update-many-mutation.input';

@InputType()
export class DirectMessageUpdateManyWithWhereWithoutInstitutionInput {

    @Field(() => DirectMessageScalarWhereInput, {nullable:false})
    @Type(() => DirectMessageScalarWhereInput)
    where!: DirectMessageScalarWhereInput;

    @Field(() => DirectMessageUpdateManyMutationInput, {nullable:false})
    @Type(() => DirectMessageUpdateManyMutationInput)
    data!: DirectMessageUpdateManyMutationInput;
}
