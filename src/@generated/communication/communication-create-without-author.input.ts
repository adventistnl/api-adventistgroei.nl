import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { InstitutionCreateNestedOneWithoutCommunicationsInput } from '../institution/institution-create-nested-one-without-communications.input';
import { Type } from 'class-transformer';
import { CommunicationRecipientCreateNestedManyWithoutCommunicationInput } from '../communication-recipient/communication-recipient-create-nested-many-without-communication.input';

@InputType()
export class CommunicationCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:false})
    priority!: string;

    @Field(() => String, {nullable:false})
    status!: string;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => Date, {nullable:false})
    schedule_at!: Date | string;

    @Field(() => Date, {nullable:false})
    published_at!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => InstitutionCreateNestedOneWithoutCommunicationsInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutCommunicationsInput)
    institution!: InstitutionCreateNestedOneWithoutCommunicationsInput;

    @Field(() => CommunicationRecipientCreateNestedManyWithoutCommunicationInput, {nullable:true})
    communication_recipients?: CommunicationRecipientCreateNestedManyWithoutCommunicationInput;
}
