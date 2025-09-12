import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutSubsidy_receiptsInput } from './project-activity-update-without-subsidy-receipts.input';

@InputType()
export class ProjectActivityUpdateToOneWithWhereWithoutSubsidy_receiptsInput {

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => ProjectActivityUpdateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutSubsidy_receiptsInput)
    data!: ProjectActivityUpdateWithoutSubsidy_receiptsInput;
}
