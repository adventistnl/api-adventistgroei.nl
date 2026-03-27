import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectAdjustmentWhereInput } from './project-adjustment-where.input';

@InputType()
export class ProjectAdjustmentScalarRelationFilter {

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    is?: ProjectAdjustmentWhereInput;

    @Field(() => ProjectAdjustmentWhereInput, {nullable:true})
    isNot?: ProjectAdjustmentWhereInput;
}
