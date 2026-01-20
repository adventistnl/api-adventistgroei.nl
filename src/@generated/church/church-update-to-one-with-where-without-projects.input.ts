import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutProjectsInput } from './church-update-without-projects.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutProjectsInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutProjectsInput)
    data!: ChurchUpdateWithoutProjectsInput;
}
