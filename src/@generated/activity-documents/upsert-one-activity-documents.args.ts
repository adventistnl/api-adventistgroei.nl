import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsCreateInput } from './activity-documents-create.input';
import { ActivityDocumentsUpdateInput } from './activity-documents-update.input';

@ArgsType()
export class UpsertOneActivityDocumentsArgs {

    @Field(() => ActivityDocumentsWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>;

    @Field(() => ActivityDocumentsCreateInput, {nullable:false})
    @Type(() => ActivityDocumentsCreateInput)
    create!: ActivityDocumentsCreateInput;

    @Field(() => ActivityDocumentsUpdateInput, {nullable:false})
    @Type(() => ActivityDocumentsUpdateInput)
    update!: ActivityDocumentsUpdateInput;
}
