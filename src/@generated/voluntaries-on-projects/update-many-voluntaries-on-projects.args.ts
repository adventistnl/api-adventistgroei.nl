import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VoluntariesOnProjectsUncheckedUpdateManyInput } from './voluntaries-on-projects-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsWhereInput } from './voluntaries-on-projects-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyVoluntariesOnProjectsArgs {

    @Field(() => VoluntariesOnProjectsUncheckedUpdateManyInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUncheckedUpdateManyInput)
    data!: VoluntariesOnProjectsUncheckedUpdateManyInput;

    @Field(() => VoluntariesOnProjectsWhereInput, {nullable:true})
    @Type(() => VoluntariesOnProjectsWhereInput)
    where?: VoluntariesOnProjectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
