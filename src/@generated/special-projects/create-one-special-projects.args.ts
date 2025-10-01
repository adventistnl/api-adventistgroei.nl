import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpecialProjectsCreateInput } from './special-projects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSpecialProjectsArgs {

    @Field(() => SpecialProjectsCreateInput, {nullable:false})
    @Type(() => SpecialProjectsCreateInput)
    data!: SpecialProjectsCreateInput;
}
