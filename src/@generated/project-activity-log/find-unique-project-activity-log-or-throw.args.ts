import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectActivityLogWhereUniqueInput } from './project-activity-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProjectActivityLogOrThrowArgs {

    @Field(() => ProjectActivityLogWhereUniqueInput, {nullable:false})
    @Type(() => ProjectActivityLogWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectActivityLogWhereUniqueInput, 'id'>;
}
