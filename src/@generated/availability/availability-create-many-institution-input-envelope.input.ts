import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AvailabilityCreateManyInstitutionInput } from './availability-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class AvailabilityCreateManyInstitutionInputEnvelope {

    @Field(() => [AvailabilityCreateManyInstitutionInput], {nullable:false})
    @Type(() => AvailabilityCreateManyInstitutionInput)
    data!: Array<AvailabilityCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
