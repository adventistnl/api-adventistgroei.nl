import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissionProjectCreateManyDepartmentInput } from './mission-project-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class MissionProjectCreateManyDepartmentInputEnvelope {

    @Field(() => [MissionProjectCreateManyDepartmentInput], {nullable:false})
    @Type(() => MissionProjectCreateManyDepartmentInput)
    data!: Array<MissionProjectCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
