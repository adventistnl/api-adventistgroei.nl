import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutSubsidiesInput } from './project-update-without-subsidies.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutSubsidiesInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutSubsidiesInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutSubsidiesInput)
    data!: ProjectUpdateWithoutSubsidiesInput;
}
