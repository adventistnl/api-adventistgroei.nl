import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusUpdateManyMutationInput } from './subsidy-status-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubsidyStatusArgs {

    @Field(() => SubsidyStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateManyMutationInput)
    data!: SubsidyStatusUpdateManyMutationInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
