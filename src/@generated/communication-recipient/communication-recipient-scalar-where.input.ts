import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumEventTargetTypeFilter } from '../prisma/enum-event-target-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class CommunicationRecipientScalarWhereInput {

    @Field(() => [CommunicationRecipientScalarWhereInput], {nullable:true})
    AND?: Array<CommunicationRecipientScalarWhereInput>;

    @Field(() => [CommunicationRecipientScalarWhereInput], {nullable:true})
    OR?: Array<CommunicationRecipientScalarWhereInput>;

    @Field(() => [CommunicationRecipientScalarWhereInput], {nullable:true})
    NOT?: Array<CommunicationRecipientScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    communication_id?: StringFilter;

    @Field(() => EnumEventTargetTypeFilter, {nullable:true})
    target_type?: EnumEventTargetTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    target_id?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    created_by?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    updated_by?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_deleted?: BoolFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deleted_at?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deleted_by?: StringNullableFilter;
}
