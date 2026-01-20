import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutItemsInput } from './subsidy-request-create-without-items.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutItemsInput } from './subsidy-request-create-or-connect-without-items.input';
import { SubsidyRequestUpsertWithoutItemsInput } from './subsidy-request-upsert-without-items.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { SubsidyRequestUpdateToOneWithWhereWithoutItemsInput } from './subsidy-request-update-to-one-with-where-without-items.input';

@InputType()
export class SubsidyRequestUpdateOneRequiredWithoutItemsNestedInput {

    @Field(() => SubsidyRequestCreateWithoutItemsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutItemsInput)
    create?: SubsidyRequestCreateWithoutItemsInput;

    @Field(() => SubsidyRequestCreateOrConnectWithoutItemsInput, {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutItemsInput)
    connectOrCreate?: SubsidyRequestCreateOrConnectWithoutItemsInput;

    @Field(() => SubsidyRequestUpsertWithoutItemsInput, {nullable:true})
    @Type(() => SubsidyRequestUpsertWithoutItemsInput)
    upsert?: SubsidyRequestUpsertWithoutItemsInput;

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateToOneWithWhereWithoutItemsInput, {nullable:true})
    @Type(() => SubsidyRequestUpdateToOneWithWhereWithoutItemsInput)
    update?: SubsidyRequestUpdateToOneWithWhereWithoutItemsInput;
}
