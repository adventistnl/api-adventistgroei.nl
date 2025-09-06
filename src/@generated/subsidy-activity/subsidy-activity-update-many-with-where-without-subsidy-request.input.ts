import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityScalarWhereInput } from './subsidy-activity-scalar-where.input';
import { Type } from 'class-transformer';
import { SubsidyActivityUpdateManyMutationInput } from './subsidy-activity-update-many-mutation.input';

@InputType()
export class SubsidyActivityUpdateManyWithWhereWithoutSubsidy_requestInput {

    @Field(() => SubsidyActivityScalarWhereInput, {nullable:false})
    @Type(() => SubsidyActivityScalarWhereInput)
    where!: SubsidyActivityScalarWhereInput;

    @Field(() => SubsidyActivityUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyActivityUpdateManyMutationInput)
    data!: SubsidyActivityUpdateManyMutationInput;
}
