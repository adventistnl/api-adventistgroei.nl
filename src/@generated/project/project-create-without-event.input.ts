import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { LanguagePreference } from '../prisma/language-preference.enum';
import { ProjectType } from '../prisma/project-type.enum';
import { DepartmentCreateNestedOneWithoutProjectsInput } from '../department/department-create-nested-one-without-projects.input';
import { UserCreateNestedOneWithoutProjectInput } from '../user/user-create-nested-one-without-project.input';
import { InstitutionCreateNestedOneWithoutProjectsInput } from '../institution/institution-create-nested-one-without-projects.input';
import { VoluntariesOnProjectsCreateNestedManyWithoutProjectInput } from '../voluntaries-on-projects/voluntaries-on-projects-create-nested-many-without-project.input';
import { ProjectActivityCreateNestedManyWithoutProjectInput } from '../project-activity/project-activity-create-nested-many-without-project.input';
import { SubsidyRequestCreateNestedManyWithoutProjectInput } from '../subsidy-request/subsidy-request-create-nested-many-without-project.input';
import { SpecialProjectsCreateNestedManyWithoutProjectInput } from '../special-projects/special-projects-create-nested-many-without-project.input';

@InputType()
export class ProjectCreateWithoutEventInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    budget!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    subsidized_budget?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    balance?: Decimal;

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

    @Field(() => DepartmentCreateNestedOneWithoutProjectsInput, {nullable:false})
    @Type(() => DepartmentCreateNestedOneWithoutProjectsInput)
    department!: DepartmentCreateNestedOneWithoutProjectsInput;

    @Field(() => UserCreateNestedOneWithoutProjectInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutProjectInput)
    owner!: UserCreateNestedOneWithoutProjectInput;

    @Field(() => InstitutionCreateNestedOneWithoutProjectsInput, {nullable:true})
    @Type(() => InstitutionCreateNestedOneWithoutProjectsInput)
    Institution?: InstitutionCreateNestedOneWithoutProjectsInput;

    @Field(() => VoluntariesOnProjectsCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsCreateNestedManyWithoutProjectInput)
    voluntary_users?: VoluntariesOnProjectsCreateNestedManyWithoutProjectInput;

    @Field(() => ProjectActivityCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => ProjectActivityCreateNestedManyWithoutProjectInput)
    activities?: ProjectActivityCreateNestedManyWithoutProjectInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutProjectInput)
    subsidies?: SubsidyRequestCreateNestedManyWithoutProjectInput;

    @Field(() => SpecialProjectsCreateNestedManyWithoutProjectInput, {nullable:true})
    @Type(() => SpecialProjectsCreateNestedManyWithoutProjectInput)
    special_projects?: SpecialProjectsCreateNestedManyWithoutProjectInput;
}
