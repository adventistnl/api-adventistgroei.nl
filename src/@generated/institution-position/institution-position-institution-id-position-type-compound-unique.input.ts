import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionType } from '../prisma/institution-position-type.enum';

@InputType()
export class InstitutionPositionInstitution_idPosition_typeCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => InstitutionPositionType, {nullable:false})
    position_type!: `${InstitutionPositionType}`;
}
