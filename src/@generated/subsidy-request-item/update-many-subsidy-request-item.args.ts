import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestItemUpdateManyMutationInput } from './subsidy-request-item-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemWhereInput } from './subsidy-request-item-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubsidyRequestItemArgs {

    @Field(() => SubsidyRequestItemUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateManyMutationInput)
    data!: SubsidyRequestItemUpdateManyMutationInput;

    @Field(() => SubsidyRequestItemWhereInput, {nullable:true})
    @Type(() => SubsidyRequestItemWhereInput)
    where?: SubsidyRequestItemWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
