import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ProjectType } from '../prisma/project-type.enum';
import { VoluntariesOnProjectsUncheckedCreateNestedManyWithoutProjectInput } from '../voluntaries-on-projects/voluntaries-on-projects-unchecked-create-nested-many-without-project.input';
import { ProjectActivityUncheckedCreateNestedManyWithoutProjectInput } from '../project-activity/project-activity-unchecked-create-nested-many-without-project.input';
import { SubsidyRequestUncheckedCreateNestedManyWithoutProjectInput } from '../subsidy-request/subsidy-request-unchecked-create-nested-many-without-project.input';
import { SpecialProjectsUncheckedCreateNestedManyWithoutProjectInput } from '../special-projects/special-projects-unchecked-create-nested-many-without-project.input';

@InputType()
export class ProjectUncheckedCreateWithoutOwnerInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    budget!: Decimal;

    @Field(() => LanguagePreference, {nullable:false})
    language_preference!: `${LanguagePreference}`;

    @Field(() => ProjectType, {nullable:false})
    type!: `${ProjectType}`;

    @Field(() => Boolean, {nullable:true})
    is_private?: boolean;

    @Field(() => Boolean, {nullable:true})
    required_volunteers?: boolean;

    @Field(() => Date, {nullable:false})
    start_at!: Date | string;

    @Field(() => Date, {nullable:false})
    end_at!: Date | string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deadline?: Date | string;

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

    @Field(() => String, {nullable:true})
    event_id?: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => VoluntariesOnProjectsUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsUncheckedCreateNestedManyWithoutProjectInput)
    voluntary_users?: VoluntariesOnProjectsUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => ProjectActivityUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => ProjectActivityUncheckedCreateNestedManyWithoutProjectInput)
    activities?: ProjectActivityUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => SubsidyRequestUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => SubsidyRequestUncheckedCreateNestedManyWithoutProjectInput)
    subsidies?: SubsidyRequestUncheckedCreateNestedManyWithoutProjectInput;

    @Field(() => SpecialProjectsUncheckedCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => SpecialProjectsUncheckedCreateNestedManyWithoutProjectInput)
    special_projects?: SpecialProjectsUncheckedCreateNestedManyWithoutProjectInput;
}
