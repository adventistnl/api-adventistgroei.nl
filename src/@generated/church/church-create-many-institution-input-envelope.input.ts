import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateManyInstitutionInput } from './church-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchCreateManyInstitutionInputEnvelope {

    @Field(() => [ChurchCreateManyInstitutionInput], {nullable:false})
    @Type(() => ChurchCreateManyInstitutionInput)
    data!: Array<ChurchCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
