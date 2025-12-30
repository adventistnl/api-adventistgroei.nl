import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemScalarWhereInput } from './subsidy-request-item-scalar-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemUpdateManyMutationInput } from './subsidy-request-item-update-many-mutation.input';

@InputType()
export class SubsidyRequestItemUpdateManyWithWhereWithoutProject_activityInput {

    @Field(() => SubsidyRequestItemScalarWhereInput, {nullable:false})
    @Type(() => SubsidyRequestItemScalarWhereInput)
    where!: SubsidyRequestItemScalarWhereInput;

    @Field(() => SubsidyRequestItemUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateManyMutationInput)
    data!: SubsidyRequestItemUpdateManyMutationInput;
}
