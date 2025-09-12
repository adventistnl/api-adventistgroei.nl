import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityUpdateWithoutSubsidy_receiptsInput } from './project-activity-update-without-subsidy-receipts.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutSubsidy_receiptsInput } from './project-activity-create-without-subsidy-receipts.input';
import { ProjectActivityWhereInput } from './project-activity-where.input';

@InputType()
export class ProjectActivityUpsertWithoutSubsidy_receiptsInput {

    @Field(() => ProjectActivityUpdateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutSubsidy_receiptsInput)
    update!: ProjectActivityUpdateWithoutSubsidy_receiptsInput;

    @Field(() => ProjectActivityCreateWithoutSubsidy_receiptsInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutSubsidy_receiptsInput)
    create!: ProjectActivityCreateWithoutSubsidy_receiptsInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;
}
