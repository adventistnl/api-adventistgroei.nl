import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutChurchesInput } from './institution-update-without-churches.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutChurchesInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutChurchesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutChurchesInput)
    data!: InstitutionUpdateWithoutChurchesInput;
}
