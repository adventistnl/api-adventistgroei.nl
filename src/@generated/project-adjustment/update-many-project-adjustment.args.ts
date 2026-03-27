import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectAdjustmentUpdateManyMutationInput } from './project-adjustment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProjectAdjustmentArgs {

    @Field(() => ProjectAdjustmentUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectAdjustmentUpdateManyMutationInput)
    data!: ProjectAdjustmentUpdateManyMutationInput;

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    @Type(() => ProjectAdjustmentWhereInput)
    where?: ProjectAdjustmentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
