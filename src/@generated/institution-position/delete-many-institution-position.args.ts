import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionPositionWhereInput } from './institution-position-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyInstitutionPositionArgs {

    @Field(() => InstitutionPositionWhereInput, {nullable:true})
    @Type(() => InstitutionPositionWhereInput)
    where?: InstitutionPositionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
