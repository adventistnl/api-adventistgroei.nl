import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { Institution } from '../institution/institution.model';
import { User } from '../user/user.model';
import { CommunicationRecipient } from '../communication-recipient/communication-recipient.model';
import { CommunicationCount } from './communication-count.output';

@ObjectType()
export class Communication {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

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
    schedule_at!: Date;

    @Field(() => Date, {nullable:false})
    published_at!: Date;

    @Field(() => String, {nullable:false})
    author_id!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [CommunicationRecipient], {nullable:true})
    communication_recipients?: Array<CommunicationRecipient>;

    @Field(() => CommunicationCount, {nullable:false})
    _count?: CommunicationCount;
}
