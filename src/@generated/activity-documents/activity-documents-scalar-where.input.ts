import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ActivityDocumentsScalarWhereInput {

    @Field(() => [ActivityDocumentsScalarWhereInput], {nullable:true})
    AND?: Array<ActivityDocumentsScalarWhereInput>;

    @Field(() => [ActivityDocumentsScalarWhereInput], {nullable:true})
    OR?: Array<ActivityDocumentsScalarWhereInput>;

    @Field(() => [ActivityDocumentsScalarWhereInput], {nullable:true})
    NOT?: Array<ActivityDocumentsScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

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

    @Field(() => StringNullableFilter, {nullable:true})
    project_activity_id?: StringNullableFilter;
}
