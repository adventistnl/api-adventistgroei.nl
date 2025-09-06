import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutChurchesInput } from './institution-update-without-churches.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutChurchesInput } from './institution-create-without-churches.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutChurchesInput {

    @Field(() => InstitutionUpdateWithoutChurchesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutChurchesInput)
    update!: InstitutionUpdateWithoutChurchesInput;

    @Field(() => InstitutionCreateWithoutChurchesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutChurchesInput)
    create!: InstitutionCreateWithoutChurchesInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
