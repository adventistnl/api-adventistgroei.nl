import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyInstitutionInput } from './project-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyInstitutionInputEnvelope {

    @Field(() => [ProjectCreateManyInstitutionInput], {nullable:false})
    @Type(() => ProjectCreateManyInstitutionInput)
    data!: Array<ProjectCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
