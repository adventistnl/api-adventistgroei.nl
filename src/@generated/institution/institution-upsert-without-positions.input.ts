import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutPositionsInput } from './institution-update-without-positions.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutPositionsInput } from './institution-create-without-positions.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutPositionsInput {

    @Field(() => InstitutionUpdateWithoutPositionsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutPositionsInput)
    update!: InstitutionUpdateWithoutPositionsInput;

    @Field(() => InstitutionCreateWithoutPositionsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutPositionsInput)
    create!: InstitutionCreateWithoutPositionsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
