import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusScalarWhereInput } from './subsidy-status-scalar-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusUpdateManyMutationInput } from './subsidy-status-update-many-mutation.input';

@InputType()
export class SubsidyStatusUpdateManyWithWhereWithoutDepartmentInput {

    @Field(() => SubsidyStatusScalarWhereInput, {nullable:false})
    @Type(() => SubsidyStatusScalarWhereInput)
    where!: SubsidyStatusScalarWhereInput;

    @Field(() => SubsidyStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateManyMutationInput)
    data!: SubsidyStatusUpdateManyMutationInput;
}
