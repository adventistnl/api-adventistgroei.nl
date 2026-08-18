import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionUpdateWithoutAssignment_invite_templatesInput } from './institution-update-without-assignment-invite-templates.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutAssignment_invite_templatesInput } from './institution-create-without-assignment-invite-templates.input';
import { InstitutionWhereInput } from './institution-where.input';

@InputType()
export class InstitutionUpsertWithoutAssignment_invite_templatesInput {

    @Field(() => InstitutionUpdateWithoutAssignment_invite_templatesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAssignment_invite_templatesInput)
    update!: InstitutionUpdateWithoutAssignment_invite_templatesInput;

    @Field(() => InstitutionCreateWithoutAssignment_invite_templatesInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutAssignment_invite_templatesInput)
    create!: InstitutionCreateWithoutAssignment_invite_templatesInput;

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;
}
