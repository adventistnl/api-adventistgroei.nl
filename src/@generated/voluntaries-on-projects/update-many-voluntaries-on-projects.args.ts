import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoluntariesOnProjectsUpdateManyMutationInput } from './voluntaries-on-projects-update-many-mutation.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsWhereInput } from './voluntaries-on-projects-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVoluntariesOnProjectsArgs {

    @Field(() => VoluntariesOnProjectsUpdateManyMutationInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUpdateManyMutationInput)
    data!: VoluntariesOnProjectsUpdateManyMutationInput;

    @Field(() => VoluntariesOnProjectsWhereInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereInput)
    where?: VoluntariesOnProjectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
