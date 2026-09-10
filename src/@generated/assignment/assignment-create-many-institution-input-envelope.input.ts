import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateManyInstitutionInput } from './assignment-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class AssignmentCreateManyInstitutionInputEnvelope {

    @Field(() => [AssignmentCreateManyInstitutionInput], {nullable:false})
    @Type(() => AssignmentCreateManyInstitutionInput)
    data!: Array<AssignmentCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
