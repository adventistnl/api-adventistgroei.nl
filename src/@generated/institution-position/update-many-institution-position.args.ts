import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionPositionUpdateManyMutationInput } from './institution-position-update-many-mutation.input';
import { Type } from 'class-transformer';
import { InstitutionPositionWhereInput } from './institution-position-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyInstitutionPositionArgs {

    @Field(() => InstitutionPositionUpdateManyMutationInput, {nullable:false})
    @Type(() => InstitutionPositionUpdateManyMutationInput)
    data!: InstitutionPositionUpdateManyMutationInput;

    @Field(() => InstitutionPositionWhereInput, {nullable:true})
    @Type(() => InstitutionPositionWhereInput)
    where?: InstitutionPositionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
