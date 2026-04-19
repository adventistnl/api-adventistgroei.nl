import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionPositionUpdateInput } from './institution-position-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';

@ArgsType()
export class UpdateOneInstitutionPositionArgs {

    @Field(() => InstitutionPositionUpdateInput, {nullable:false})
    @Type(() => InstitutionPositionUpdateInput)
    data!: InstitutionPositionUpdateInput;

    @Field(() => InstitutionPositionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionPositionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>;
}
