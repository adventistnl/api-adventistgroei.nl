import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateManyInstitutionInput } from './department-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class DepartmentCreateManyInstitutionInputEnvelope {

    @Field(() => [DepartmentCreateManyInstitutionInput], {nullable:false})
    @Type(() => DepartmentCreateManyInstitutionInput)
    data!: Array<DepartmentCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
