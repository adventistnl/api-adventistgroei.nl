import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutItemsInput } from './subsidy-request-create-without-items.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutItemsInput } from './subsidy-request-create-or-connect-without-items.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestCreateNestedOneWithoutItemsInput {

    @Field(() => SubsidyRequestCreateWithoutItemsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutItemsInput)
    create?: SubsidyRequestCreateWithoutItemsInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutItemsInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutItemsInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;
}
