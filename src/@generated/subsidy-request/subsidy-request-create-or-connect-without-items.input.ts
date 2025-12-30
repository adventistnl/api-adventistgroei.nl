import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutItemsInput } from './subsidy-request-create-without-items.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutItemsInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutItemsInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutItemsInput)
    create!: SubsidyRequestCreateWithoutItemsInput;
}
