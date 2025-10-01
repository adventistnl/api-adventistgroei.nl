import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpecialProjectsCreateManyInput } from './special-projects-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySpecialProjectsArgs {

    @Field(() => [SpecialProjectsCreateManyInput], {nullable:false})
    @Type(() => SpecialProjectsCreateManyInput)
    data!: Array<SpecialProjectsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
