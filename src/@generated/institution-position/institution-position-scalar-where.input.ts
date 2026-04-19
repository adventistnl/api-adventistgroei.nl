import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumInstitutionPositionTypeFilter } from '../prisma/enum-institution-position-type-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class InstitutionPositionScalarWhereInput {

    @Field(() => [InstitutionPositionScalarWhereInput], {nullable:true})
    AND?: Array<InstitutionPositionScalarWhereInput>;

    @Field(() => [InstitutionPositionScalarWhereInput], {nullable:true})
    OR?: Array<InstitutionPositionScalarWhereInput>;

    @Field(() => [InstitutionPositionScalarWhereInput], {nullable:true})
    NOT?: Array<InstitutionPositionScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    institution_id?: StringFilter;

    @Field(() => EnumInstitutionPositionTypeFilter, {nullable:true})
    position_type?: EnumInstitutionPositionTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    user_id?: StringFilter;

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
