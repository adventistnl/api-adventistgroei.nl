import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyActivityUpdateManyMutationInput } from './subsidy-activity-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SubsidyActivityWhereInput } from './subsidy-activity-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySubsidyActivityArgs {

    @Field(() => SubsidyActivityUpdateManyMutationInput, {nullable:false})
    @Type(() => SubsidyActivityUpdateManyMutationInput)
    data!: SubsidyActivityUpdateManyMutationInput;

    @Field(() => SubsidyActivityWhereInput, {nullable:true})
    @Type(() => SubsidyActivityWhereInput)
    where?: SubsidyActivityWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
