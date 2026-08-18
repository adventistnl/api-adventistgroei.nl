import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutAssignment_invite_templatesInput } from './institution-create-without-assignment-invite-templates.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutAssignment_invite_templatesInput } from './institution-create-or-connect-without-assignment-invite-templates.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutAssignment_invite_templatesInput {

    @Field(() => InstitutionCreateWithoutAssignment_invite_templatesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutAssignment_invite_templatesInput)
    create?: InstitutionCreateWithoutAssignment_invite_templatesInput;

    @Field(() => InstitutionCreateOrConnectWithoutAssignment_invite_templatesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutAssignment_invite_templatesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutAssignment_invite_templatesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
