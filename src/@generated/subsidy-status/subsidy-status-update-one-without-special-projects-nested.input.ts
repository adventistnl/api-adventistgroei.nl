import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutSpecial_projectsInput } from './subsidy-status-create-without-special-projects.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput } from './subsidy-status-create-or-connect-without-special-projects.input';
import { SubsidyStatusUpsertWithoutSpecial_projectsInput } from './subsidy-status-upsert-without-special-projects.input';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';
import { SubsidyStatusUpdateToOneWithWhereWithoutSpecial_projectsInput } from './subsidy-status-update-to-one-with-where-without-special-projects.input';

@InputType()
export class SubsidyStatusUpdateOneWithoutSpecial_projectsNestedInput {

    @Field(() => SubsidyStatusCreateWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutSpecial_projectsInput)
    create?: SubsidyStatusCreateWithoutSpecial_projectsInput;

    @Field(() => SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput)
    connectOrCreate?: SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput;

    @Field(() => SubsidyStatusUpsertWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => SubsidyStatusUpsertWithoutSpecial_projectsInput)
    upsert?: SubsidyStatusUpsertWithoutSpecial_projectsInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    disconnect?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    delete?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;

    @Field(() => SubsidyStatusUpdateToOneWithWhereWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => SubsidyStatusUpdateToOneWithWhereWithoutSpecial_projectsInput)
    update?: SubsidyStatusUpdateToOneWithWhereWithoutSpecial_projectsInput;
}
