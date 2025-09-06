import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutRegionsInput } from './institution-update-without-regions.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutRegionsInput } from './institution-create-without-regions.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutRegionsInput {

    @Field(() => InstitutionUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutRegionsInput)
    update!: InstitutionUpdateWithoutRegionsInput;

    @Field(() => InstitutionCreateWithoutRegionsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutRegionsInput)
    create!: InstitutionCreateWithoutRegionsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
