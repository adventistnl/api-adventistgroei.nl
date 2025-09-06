import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissionProjectScalarWhereInput } from './mission-project-scalar-where.input';
import { Type } from 'class-transformer';
import { MissionProjectUpdateManyMutationInput } from './mission-project-update-many-mutation.input';

@InputType()
export class MissionProjectUpdateManyWithWhereWithoutInstitutionInput {

    @Field(() => MissionProjectScalarWhereInput, {nullable:false})
    @Type(() => MissionProjectScalarWhereInput)
    where!: MissionProjectScalarWhereInput;

    @Field(() => MissionProjectUpdateManyMutationInput, {nullable:false})
    @Type(() => MissionProjectUpdateManyMutationInput)
    data!: MissionProjectUpdateManyMutationInput;
}
