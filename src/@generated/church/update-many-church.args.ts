import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchUpdateManyMutationInput } from './church-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ChurchWhereInput } from './church-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyChurchArgs {

    @Field(() => ChurchUpdateManyMutationInput, {nullable:false})
    @Type(() => ChurchUpdateManyMutationInput)
    data!: ChurchUpdateManyMutationInput;

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
