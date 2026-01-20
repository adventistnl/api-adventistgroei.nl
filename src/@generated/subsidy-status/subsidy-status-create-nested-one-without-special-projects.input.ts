import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateWithoutSpecial_projectsInput } from './subsidy-status-create-without-special-projects.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput } from './subsidy-status-create-or-connect-without-special-projects.input';
import { Prisma } from '@prisma/client';
import { SubsidyStatusWhereUniqueInput } from './subsidy-status-where-unique.input';

@InputType()
export class SubsidyStatusCreateNestedOneWithoutSpecial_projectsInput {

    @Field(() => SubsidyStatusCreateWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => SubsidyStatusCreateWithoutSpecial_projectsInput)
    create?: SubsidyStatusCreateWithoutSpecial_projectsInput;

    @Field(() => SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput)
    connectOrCreate?: SubsidyStatusCreateOrConnectWithoutSpecial_projectsInput;

    @Field(() => SubsidyStatusWhereUniqueInput, {nullable:true})
    @Type(() => SubsidyStatusWhereUniqueInput)
    connect?: Prisma.AtLeast<SubsidyStatusWhereUniqueInput, 'id'>;
}
