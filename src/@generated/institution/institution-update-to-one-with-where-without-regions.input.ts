import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutRegionsInput } from './institution-update-without-regions.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutRegionsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutRegionsInput)
    data!: InstitutionUpdateWithoutRegionsInput;
}
