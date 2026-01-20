import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDocumentsUpdateInput } from './activity-documents-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';

@ArgsType()
export class UpdateOneActivityDocumentsArgs {

    @Field(() => ActivityDocumentsUpdateInput, {nullable:false})
    @Type(() => ActivityDocumentsUpdateInput)
    data!: ActivityDocumentsUpdateInput;

    @Field(() => ActivityDocumentsWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>;
}
