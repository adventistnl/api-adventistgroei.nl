import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionType } from '../prisma/institution-position-type.enum';
import { InstitutionCreateNestedOneWithoutPositionsInput } from '../institution/institution-create-nested-one-without-positions.input';
import { Type } from 'class-transformer';

@InputType()
export class InstitutionPositionCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => InstitutionPositionType, {nullable:false})
    position_type!: `${InstitutionPositionType}`;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => InstitutionCreateNestedOneWithoutPositionsInput, {nullable:false})
    @Type(() => InstitutionCreateNestedOneWithoutPositionsInput)
    institution!: InstitutionCreateNestedOneWithoutPositionsInput;
}
