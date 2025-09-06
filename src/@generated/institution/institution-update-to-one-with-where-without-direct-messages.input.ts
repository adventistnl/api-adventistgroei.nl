import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutDirect_messagesInput } from './institution-update-without-direct-messages.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutDirect_messagesInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutDirect_messagesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutDirect_messagesInput)
    data!: InstitutionUpdateWithoutDirect_messagesInput;
}
