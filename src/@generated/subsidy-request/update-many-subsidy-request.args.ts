import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestUpdateManyMutationInput } from './subsidy-request-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubsidyRequestArgs {

    @Field(() => SubsidyRequestUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateManyMutationInput)
    data!: SubsidyRequestUpdateManyMutationInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
