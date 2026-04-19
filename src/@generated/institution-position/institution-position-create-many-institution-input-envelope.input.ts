import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionCreateManyInstitutionInput } from './institution-position-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class InstitutionPositionCreateManyInstitutionInputEnvelope {

    @Field(() => [InstitutionPositionCreateManyInstitutionInput], {nullable:false})
    @Type(() => InstitutionPositionCreateManyInstitutionInput)
    data!: Array<InstitutionPositionCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
