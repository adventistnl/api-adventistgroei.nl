import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationScalarWhereInput } from './communication-scalar-where.input';
import { Type } from 'class-transformer';
import { CommunicationUpdateManyMutationInput } from './communication-update-many-mutation.input';

@InputType()
export class CommunicationUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => CommunicationScalarWhereInput, {nullable:false})
    @Type(() => CommunicationScalarWhereInput)
    where!: CommunicationScalarWhereInput;

    @Field(() => CommunicationUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunicationUpdateManyMutationInput)
    data!: CommunicationUpdateManyMutationInput;
}
