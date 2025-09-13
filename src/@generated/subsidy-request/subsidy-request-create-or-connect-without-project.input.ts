import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutProjectInput } from './subsidy-request-create-without-project.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutProjectInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutProjectInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutProjectInput)
    create!: SubsidyRequestCreateWithoutProjectInput;
}
