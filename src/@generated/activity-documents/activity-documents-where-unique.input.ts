import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDocumentsWhereInput } from './activity-documents-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class ActivityDocumentsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => [ActivityDocumentsWhereInput], {nullable:true})
    AND?: Array<ActivityDocumentsWhereInput>;

    @Field(() => [ActivityDocumentsWhereInput], {nullable:true})
    OR?: Array<ActivityDocumentsWhereInput>;

    @Field(() => [ActivityDocumentsWhereInput], {nullable:true})
    NOT?: Array<ActivityDocumentsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    activity_id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    file_url?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_validated?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    uploaded_by?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    validated_at?: DateTimeNullableFilter;
}
