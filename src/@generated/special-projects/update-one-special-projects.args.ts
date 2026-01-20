import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpecialProjectsUpdateInput } from './special-projects-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SpecialProjectsWhereUniqueInput } from './special-projects-where-unique.input';

@ArgsType()
export class UpdateOneSpecialProjectsArgs {

    @Field(() => SpecialProjectsUpdateInput, {nullable:false})
    @Type(() => SpecialProjectsUpdateInput)
    data!: SpecialProjectsUpdateInput;

    @Field(() => SpecialProjectsWhereUniqueInput, {nullable:false})
    @Type(() => SpecialProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<SpecialProjectsWhereUniqueInput, 'id'>;
}
