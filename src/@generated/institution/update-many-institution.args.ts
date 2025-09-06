import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionUpdateManyMutationInput } from './institution-update-many-mutation.input';
import { Type } from 'class-transformer';
import { InstitutionWhereInput } from './institution-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyInstitutionArgs {

    @Field(() => InstitutionUpdateManyMutationInput, {nullable:false})
    @Type(() => InstitutionUpdateManyMutationInput)
    data!: InstitutionUpdateManyMutationInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
