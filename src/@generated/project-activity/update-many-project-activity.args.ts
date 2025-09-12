import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectActivityUpdateManyMutationInput } from './project-activity-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectActivityWhereInput } from './project-activity-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyProjectActivityArgs {

    @Field(() => ProjectActivityUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectActivityUpdateManyMutationInput)
    data!: ProjectActivityUpdateManyMutationInput;

    @Field(() => ProjectActivityWhereInput, {nullable:true})
    @Type(() => ProjectActivityWhereInput)
    where?: ProjectActivityWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
