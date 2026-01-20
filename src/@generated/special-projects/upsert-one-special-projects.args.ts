import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';
import { Type } from 'class-transformer';
import { SpecialProjectsCreateInput } from './special-projects-create.input';
import { SpecialProjectsUpdateInput } from './special-projects-update.input';

@ArgsType()
export class UpsertOneSpecialProjectsArgs {

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:false})
    @Type(() => SpecialProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;

    @Field(() => SpecialProjectsCreateInput, {nullable:false})
    @Type(() => SpecialProjectsCreateInput)
    create!: SpecialProjectsCreateInput;

    @Field(() => SpecialProjectsUpdateInput, {nullable:false})
    @Type(() => SpecialProjectsUpdateInput)
    update!: SpecialProjectsUpdateInput;
}
