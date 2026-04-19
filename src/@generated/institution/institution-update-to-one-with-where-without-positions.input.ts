import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutPositionsInput } from './institution-update-without-positions.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutPositionsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutPositionsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutPositionsInput)
    data!: InstitutionUpdateWithoutPositionsInput;
}
