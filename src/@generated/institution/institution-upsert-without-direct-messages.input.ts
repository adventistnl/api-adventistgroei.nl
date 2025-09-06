import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutDirect_messagesInput } from './institution-update-without-direct-messages.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutDirect_messagesInput } from './institution-create-without-direct-messages.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutDirect_messagesInput {

    @Field(() => InstitutionUpdateWithoutDirect_messagesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutDirect_messagesInput)
    update!: InstitutionUpdateWithoutDirect_messagesInput;

    @Field(() => InstitutionCreateWithoutDirect_messagesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutDirect_messagesInput)
    create!: InstitutionCreateWithoutDirect_messagesInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
