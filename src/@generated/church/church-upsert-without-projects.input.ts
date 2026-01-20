import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchUpdateWithoutProjectsInput } from './church-update-without-projects.input';
import { Type } from 'class-transformer';
import { ChurchCreateWithoutProjectsInput } from './church-create-without-projects.input';
import { ChurchWhereInput } from './church-where.input';

@InputType()
export class ChurchUpsertWithoutProjectsInput {

    @Field(() => ChurchUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutProjectsInput)
    update!: ChurchUpdateWithoutProjectsInput;

    @Field(() => ChurchCreateWithoutProjectsInput, {nullable:false})
    @Type(() => ChurchCreateWithoutProjectsInput)
    create!: ChurchCreateWithoutProjectsInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;
}
