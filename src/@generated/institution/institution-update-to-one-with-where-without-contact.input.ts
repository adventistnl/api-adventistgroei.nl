import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutContactInput } from './institution-update-without-contact.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutContactInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutContactInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutContactInput)
    data!: InstitutionUpdateWithoutContactInput;
}
