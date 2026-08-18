import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PreacherRegionAccessCreateManyInstitutionInput } from './preacher-region-access-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class PreacherRegionAccessCreateManyInstitutionInputEnvelope {

    @Field(() => [PreacherRegionAccessCreateManyInstitutionInput], {nullable:false})
    @Type(() => PreacherRegionAccessCreateManyInstitutionInput)
    data!: Array<PreacherRegionAccessCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
