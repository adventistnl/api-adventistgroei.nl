import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpecialProjectsUpdateManyMutationInput } from './special-projects-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SpecialProjectsWhereInput } from './special-projects-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManySpecialProjectsArgs {

    @Field(() => SpecialProjectsUpdateManyMutationInput, {nullable:false})
    @Type(() => SpecialProjectsUpdateManyMutationInput)
    data!: SpecialProjectsUpdateManyMutationInput;

    @Field(() => SpecialProjectsWhereInput, {nullable:true})
    @Type(() => SpecialProjectsWhereInput)
    where?: SpecialProjectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
