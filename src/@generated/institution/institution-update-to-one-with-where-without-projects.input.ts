import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutProjectsInput } from './institution-update-without-projects.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutProjectsInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutProjectsInput)
    data!: InstitutionUpdateWithoutProjectsInput;
}
