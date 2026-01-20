import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsCreateManyProjectInput } from './special-projects-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class SpecialProjectsCreateManyProjectInputEnvelope {

    @Field(() => [SpecialProjectsCreateManyProjectInput], {nullable:false})
    @Type(() => SpecialProjectsCreateManyProjectInput)
    data!: Array<SpecialProjectsCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
