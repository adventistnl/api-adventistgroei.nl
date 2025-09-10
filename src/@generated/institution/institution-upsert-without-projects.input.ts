import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutProjectsInput } from './institution-update-without-projects.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutProjectsInput } from './institution-create-without-projects.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutProjectsInput {

    @Field(() => InstitutionUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutProjectsInput)
    update!: InstitutionUpdateWithoutProjectsInput;

    @Field(() => InstitutionCreateWithoutProjectsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutProjectsInput)
    create!: InstitutionCreateWithoutProjectsInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
