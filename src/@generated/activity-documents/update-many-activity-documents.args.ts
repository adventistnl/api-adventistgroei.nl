import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDocumentsUpdateManyMutationInput } from './activity-documents-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsWhereInput } from './activity-documents-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyActivityDocumentsArgs {

    @Field(() => ActivityDocumentsUpdateManyMutationInput, {nullable:false})
    @Type(() => ActivityDocumentsUpdateManyMutationInput)
    data!: ActivityDocumentsUpdateManyMutationInput;

    @Field(() => ActivityDocumentsWhereInput, {nullable:true})
    @Type(() => ActivityDocumentsWhereInput)
    where?: ActivityDocumentsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
