import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutSubsidy_request_itemsInput } from './project-activity-update-without-subsidy-request-items.input';

@InputType()
export class ProjectActivityUpdateToOneWithWhereWithoutSubsidy_request_itemsInput {

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => ProjectActivityUpdateWithoutSubsidy_request_itemsInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutSubsidy_request_itemsInput)
    data!: ProjectActivityUpdateWithoutSubsidy_request_itemsInput;
}
