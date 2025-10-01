import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ActivityDocumentsWhereUniqueInput } from './activity-documents-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueActivityDocumentsOrThrowArgs {

    @Field(() => ActivityDocumentsWhereUniqueInput, {nullable:false})
    @Type(() => ActivityDocumentsWhereUniqueInput)
    where!: Prisma.AtLeast<ActivityDocumentsWhereUniqueInput, 'id'>;
}
