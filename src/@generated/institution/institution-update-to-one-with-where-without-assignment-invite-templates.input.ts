import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionWhereInput } from './institution-where.input';
import { Type } from 'class-transformer';
import { InstitutionUpdateWithoutAssignment_invite_templatesInput } from './institution-update-without-assignment-invite-templates.input';

@InputType()
export class InstitutionUpdateToOneWithWhereWithoutAssignment_invite_templatesInput {

    @Field(() => InstitutionWhereInput, {nullable:true})
    @Type(() => InstitutionWhereInput)
    where?: InstitutionWhereInput;

    @Field(() => InstitutionUpdateWithoutAssignment_invite_templatesInput, {nullable:false})
    @Type(() => InstitutionUpdateWithoutAssignment_invite_templatesInput)
    data!: InstitutionUpdateWithoutAssignment_invite_templatesInput;
}
