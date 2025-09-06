import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissionProjectCreateManyInstitutionInput } from './mission-project-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class MissionProjectCreateManyInstitutionInputEnvelope {

    @Field(() => [MissionProjectCreateManyInstitutionInput], {nullable:false})
    @Type(() => MissionProjectCreateManyInstitutionInput)
    data!: Array<MissionProjectCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
