import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityUpdateWithoutSubsidy_request_itemsInput } from './project-activity-update-without-subsidy-request-items.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutSubsidy_request_itemsInput } from './project-activity-create-without-subsidy-request-items.input';
import { ProjectActivityWhereInput } from './project-activity-where.input';

@InputType()
export class ProjectActivityUpsertWithoutSubsidy_request_itemsInput {

    @Field(() => ProjectActivityUpdateWithoutSubsidy_request_itemsInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutSubsidy_request_itemsInput)
    update!: ProjectActivityUpdateWithoutSubsidy_request_itemsInput;

    @Field(() => ProjectActivityCreateWithoutSubsidy_request_itemsInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutSubsidy_request_itemsInput)
    create!: ProjectActivityCreateWithoutSubsidy_request_itemsInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;
}
