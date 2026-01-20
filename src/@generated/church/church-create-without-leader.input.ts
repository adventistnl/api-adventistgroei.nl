import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchType } from '../prisma/church-type.enum';
import { InstitutionCreateNestedOneWithoutChurchesInput } from '../institution/institution-create-nested-one-without-churches.input';
import { Type } from 'class-transformer';
import { RegionCreateNestedOneWithoutChurchesInput } from '../region/region-create-nested-one-without-churches.input';
import { ContactCreateNestedOneWithoutChurchInput } from '../contact/contact-create-nested-one-without-church.input';
import { DepartmentCreateNestedManyWithoutChurchInput } from '../department/department-create-nested-many-without-church.input';
import { UserCreateNestedManyWithoutChurchInput } from '../user/user-create-nested-many-without-church.input';
import { SubsidyRequestCreateNestedManyWithoutChurchInput } from '../subsidy-request/subsidy-request-create-nested-many-without-church.input';
import { AnnualBudgetCreateNestedManyWithoutChurchInput } from '../annual-budget/annual-budget-create-nested-many-without-church.input';
import { ProjectCreateNestedManyWithoutChurchInput } from '../project/project-create-nested-many-without-church.input';

@InputType()
export class ChurchCreateWithoutLeaderInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ChurchType, {nullable:true})
    type?: `${ChurchType}`;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @Field(() => InstitutionCreateNestedOneWithoutChurchesInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutChurchesInput)
    institution!: InstitutionCreateNestedOneWithoutChurchesInput;

    @Field(() => RegionCreateNestedOneWithoutChurchesInput, {nullable:true})
    region?: RegionCreateNestedOneWithoutChurchesInput;

    @Field(() => ContactCreateNestedOneWithoutChurchInput, {nullable:true})
    @Type(() => ContactCreateNestedOneWithoutChurchInput)
    contact?: ContactCreateNestedOneWithoutChurchInput;

    @Field(() => DepartmentCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => DepartmentCreateNestedManyWithoutChurchInput)
    departments?: DepartmentCreateNestedManyWithoutChurchInput;

    @Field(() => UserCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => UserCreateNestedManyWithoutChurchInput)
    users?: UserCreateNestedManyWithoutChurchInput;

    @Field(() => SubsidyRequestCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => SubsidyRequestCreateNestedManyWithoutChurchInput)
    subsidy_requests?: SubsidyRequestCreateNestedManyWithoutChurchInput;

    @Field(() => AnnualBudgetCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => AnnualBudgetCreateNestedManyWithoutChurchInput)
    annual_budgets?: AnnualBudgetCreateNestedManyWithoutChurchInput;

    @Field(() => ProjectCreateNestedManyWithoutChurchInput, {nullable:true})
    @Type(() => ProjectCreateNestedManyWithoutChurchInput)
    projects?: ProjectCreateNestedManyWithoutChurchInput;
}
