import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Type } from 'class-transformer';
import { ProjectActivityUpdateWithoutActivity_fundingInput } from './project-activity-update-without-activity-funding.input';

@InputType()
export class ProjectActivityUpdateToOneWithWhereWithoutActivity_fundingInput {

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => ProjectActivityUpdateWithoutActivity_fundingInput, {nullable:false})
    @Type(() => ProjectActivityUpdateWithoutActivity_fundingInput)
    data!: ProjectActivityUpdateWithoutActivity_fundingInput;
}
