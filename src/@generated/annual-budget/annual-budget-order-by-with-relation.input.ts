import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { InstitutionOrderByWithRelationInput } from '../institution/institution-order-by-with-relation.input';
import { ChurchOrderByWithRelationInput } from '../church/church-order-by-with-relation.input';
import { DepartmentOrderByWithRelationInput } from '../department/department-order-by-with-relation.input';

@InputType()
export class AnnualBudgetOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    year?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    planned_budget?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    total_expenses?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    balance?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    notes?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    justification?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    approved_by?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    created_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    created_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updated_by?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_deleted?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_at?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    deleted_by?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    institution_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    church_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    department_id?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    approved_user?: UserOrderByWithRelationInput;

    @Field(() => InstitutionOrderByWithRelationInput, {nullable:true})
    @Type(() => InstitutionOrderByWithRelationInput)
    institution?: InstitutionOrderByWithRelationInput;

    @Field(() => ChurchOrderByWithRelationInput, {nullable:true})
    @Type(() => ChurchOrderByWithRelationInput)
    church?: ChurchOrderByWithRelationInput;

    @Field(() => DepartmentOrderByWithRelationInput, {nullable:true})
    @Type(() => DepartmentOrderByWithRelationInput)
    department?: DepartmentOrderByWithRelationInput;
}
