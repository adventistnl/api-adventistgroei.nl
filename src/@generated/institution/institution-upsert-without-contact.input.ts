import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutContactInput } from './institution-update-without-contact.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutContactInput } from './institution-create-without-contact.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutContactInput {

    @Field(() => InstitutionUpdateWithoutContactInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutContactInput)
    update!: InstitutionUpdateWithoutContactInput;

    @Field(() => InstitutionCreateWithoutContactInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutContactInput)
    create!: InstitutionCreateWithoutContactInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
