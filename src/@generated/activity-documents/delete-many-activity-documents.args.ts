import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDocumentsWhereInput } from './activity-documents-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyActivityDocumentsArgs {

    @Field(() => ActivityDocumentsWhereInput, {nullable:true})
    @Type(() => ActivityDocumentsWhereInput)
    where?: ActivityDocumentsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
