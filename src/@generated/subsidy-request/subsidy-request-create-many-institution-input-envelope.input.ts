import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateManyInstitutionInput } from './subsidy-request-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestCreateManyInstitutionInputEnvelope {

    @Field(() => [SubsidyRequestCreateManyInstitutionInput], {nullable:false})
    @Type(() => SubsidyRequestCreateManyInstitutionInput)
    data!: Array<SubsidyRequestCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
