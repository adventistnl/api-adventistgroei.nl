import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutPreacher_region_accessInput } from './institution-update-without-preacher-region-access.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutPreacher_region_accessInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutPreacher_region_accessInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutPreacher_region_accessInput)
    data!: InstitutionUpdateWithoutPreacher_region_accessInput;
}
