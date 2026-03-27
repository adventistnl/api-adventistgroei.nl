import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectAdjustmentCreateInput } from './project-adjustment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectAdjustmentArgs {

    @Field(() => ProjectAdjustmentCreateInput, {nullable:false})
    @Type(() => ProjectAdjustmentCreateInput)
    data!: ProjectAdjustmentCreateInput;
}
