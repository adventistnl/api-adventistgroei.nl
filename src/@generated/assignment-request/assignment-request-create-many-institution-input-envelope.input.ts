import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateManyInstitutionInput } from './assignment-request-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class AssignmentRequestCreateManyInstitutionInputEnvelope {

    @Field(() => [AssignmentRequestCreateManyInstitutionInput], {nullable:false})
    @Type(() => AssignmentRequestCreateManyInstitutionInput)
    data!: Array<AssignmentRequestCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
