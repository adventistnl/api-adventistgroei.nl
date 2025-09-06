import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommunicationUpdateManyMutationInput } from './communication-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommunicationWhereInput } from './communication-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCommunicationArgs {

    @Field(() => CommunicationUpdateManyMutationInput, {nullable:false})
    @Type(() => CommunicationUpdateManyMutationInput)
    data!: CommunicationUpdateManyMutationInput;

    @Field(() => CommunicationWhereInput, {nullable:true})
    @Type(() => CommunicationWhereInput)
    where?: CommunicationWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
