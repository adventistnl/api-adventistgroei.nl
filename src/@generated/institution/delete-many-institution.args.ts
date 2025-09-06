import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyInstitutionArgs {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
