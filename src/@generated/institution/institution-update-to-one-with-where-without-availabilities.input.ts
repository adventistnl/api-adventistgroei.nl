import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutAvailabilitiesInput } from './institution-update-without-availabilities.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutAvailabilitiesInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutAvailabilitiesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAvailabilitiesInput)
    data!: InstitutionUpdateWithoutAvailabilitiesInput;
}
