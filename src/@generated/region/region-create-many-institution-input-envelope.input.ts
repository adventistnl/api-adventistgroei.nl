import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateManyInstitutionInput } from './region-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class RegionCreateManyInstitutionInputEnvelope {

    @Field(() => [RegionCreateManyInstitutionInput], {nullable:false})
    @Type(() => RegionCreateManyInstitutionInput)
    data!: Array<RegionCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
