import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectAdjustmentCreateManyInput } from './project-adjustment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectAdjustmentArgs {

    @Field(() => [ProjectAdjustmentCreateManyInput], {nullable:false})
    @Type(() => ProjectAdjustmentCreateManyInput)
    data!: Array<ProjectAdjustmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
