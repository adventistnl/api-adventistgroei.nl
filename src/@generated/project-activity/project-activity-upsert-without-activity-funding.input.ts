import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityUpdateWithoutActivity_fundingInput } from './project-activity-update-without-activity-funding.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateWithoutActivity_fundingInput } from './project-activity-create-without-activity-funding.input';
import { ProjectActivityWhereInput } from './project-activity-where.input';

@InputType()
export class ProjectActivityUpsertWithoutActivity_fundingInput {

    @Field(() => ProjectActivityUpdateWithoutActivity_fundingInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutActivity_fundingInput)
    update!: ProjectActivityUpdateWithoutActivity_fundingInput;

    @Field(() => ProjectActivityCreateWithoutActivity_fundingInput, {nullable:false})
    @Type(() => ProjectActivityCreateWithoutActivity_fundingInput)
    create!: ProjectActivityCreateWithoutActivity_fundingInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;
}
