import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoluntariesOnProjectsWhereInput } from './voluntaries-on-projects-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyVoluntariesOnProjectsArgs {

    @Field(() => VoluntariesOnProjectsWhereInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereInput)
    where?: VoluntariesOnProjectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
