import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAssignment_invite_templatesInput } from './institution-create-without-assignment-invite-templates.input';

@InputType()
export class InstitutionCreateOrConnectWithoutAssignment_invite_templatesInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutAssignment_invite_templatesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAssignment_invite_templatesInput)
    create!: InstitutionCreateWithoutAssignment_invite_templatesInput;
}
