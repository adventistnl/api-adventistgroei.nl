import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutSubsidiesInput } from './project-update-without-subsidies.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutSubsidiesInput } from './project-create-without-subsidies.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutSubsidiesInput {

    @Field(() => ProjectUpdateWithoutSubsidiesInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutSubsidiesInput)
    update!: ProjectUpdateWithoutSubsidiesInput;

    @Field(() => ProjectCreateWithoutSubsidiesInput, {nullable:false})
    @Type(() => ProjectCreateWithoutSubsidiesInput)
    create!: ProjectCreateWithoutSubsidiesInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
