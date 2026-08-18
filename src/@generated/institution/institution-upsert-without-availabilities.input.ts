import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutAvailabilitiesInput } from './institution-update-without-availabilities.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAvailabilitiesInput } from './institution-create-without-availabilities.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutAvailabilitiesInput {

    @Field(() => InstitutionUpdateWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAvailabilitiesInput)
    update!: InstitutionUpdateWithoutAvailabilitiesInput;

    @Field(() => InstitutionCreateWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAvailabilitiesInput)
    create!: InstitutionCreateWithoutAvailabilitiesInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
