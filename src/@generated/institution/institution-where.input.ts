import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumLanguagePreferenceFilter } from '../prisma/enum-language-preference-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ContactNullableScalarRelationFilter } from '../contact/contact-nullable-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { RegionListRelationFilter } from '../region/region-list-relation-filter.input';
import { ChurchListRelationFilter } from '../church/church-list-relation-filter.input';
import { DepartmentListRelationFilter } from '../department/department-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { CommunicationListRelationFilter } from '../communication/communication-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';
import { SettingListRelationFilter } from '../setting/setting-list-relation-filter.input';
import { ProjectListRelationFilter } from '../project/project-list-relation-filter.input';
import { DirectMessageListRelationFilter } from '../direct-message/direct-message-list-relation-filter.input';
import { SubsidyRequestListRelationFilter } from '../subsidy-request/subsidy-request-list-relation-filter.input';

@InputType()
export class InstitutionWhereInput {

    @Field(() => [InstitutionWhereInput], {nullable:true})
    AND?: Array<InstitutionWhereInput>;

    @Field(() => [InstitutionWhereInput], {nullable:true})
    OR?: Array<InstitutionWhereInput>;

    @Field(() => [InstitutionWhereInput], {nullable:true})
    NOT?: Array<InstitutionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    denomination?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => EnumLanguagePreferenceFilter, {nullable:true})
    language_preference?: EnumLanguagePreferenceFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    contact_id?: StringNullableFilter;

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

    @Field(() => ContactNullableScalarRelationFilter, {nullable:true})
    @Type(() => ContactNullableScalarRelationFilter)
    contact?: ContactNullableScalarRelationFilter;

    @Field(() => RegionListRelationFilter, {nullable:true})
    regions?: RegionListRelationFilter;

    @Field(() => ChurchListRelationFilter, {nullable:true})
    @Type(() => ChurchListRelationFilter)
    churches?: ChurchListRelationFilter;

    @Field(() => DepartmentListRelationFilter, {nullable:true})
    @Type(() => DepartmentListRelationFilter)
    departments?: DepartmentListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    @Type(() => UserListRelationFilter)
    users?: UserListRelationFilter;

    @Field(() => CommunicationListRelationFilter, {nullable:true})
    communications?: CommunicationListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;

    @Field(() => SettingListRelationFilter, {nullable:true})
    settings?: SettingListRelationFilter;

    @Field(() => ProjectListRelationFilter, {nullable:true})
    @Type(() => ProjectListRelationFilter)
    projects?: ProjectListRelationFilter;

    @Field(() => DirectMessageListRelationFilter, {nullable:true})
    direct_messages?: DirectMessageListRelationFilter;

    @Field(() => SubsidyRequestListRelationFilter, {nullable:true})
    @Type(() => SubsidyRequestListRelationFilter)
    subsidy_requests?: SubsidyRequestListRelationFilter;
}
