import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestScalarWhereInput } from './subsidy-request-scalar-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateManyMutationInput } from './subsidy-request-update-many-mutation.input';

@InputType()
export class SubsidyRequestUpdateManyWithWhereWithoutChurchInput {

    @Field(() => SubsidyRequestScalarWhereInput, {nullable:false})
    @Type(() => SubsidyRequestScalarWhereInput)
    where!: SubsidyRequestScalarWhereInput;

    @Field(() => SubsidyRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateManyMutationInput)
    data!: SubsidyRequestUpdateManyMutationInput;
}
