import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionPositionUpdateWithoutUserInput } from './institution-position-update-without-user.input';

@InputType()
export class InstitutionPositionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => InstitutionPositionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionPositionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>;

    @Field(() => InstitutionPositionUpdateWithoutUserInput, {nullable:false})
    @Type(() => InstitutionPositionUpdateWithoutUserInput)
    data!: InstitutionPositionUpdateWithoutUserInput;
}
