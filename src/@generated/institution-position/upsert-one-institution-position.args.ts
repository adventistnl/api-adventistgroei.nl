import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionPositionWhereUniqueInput } from './institution-position-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionPositionCreateInput } from './institution-position-create.input';
import { InstitutionPositionUpdateInput } from './institution-position-update.input';

@ArgsType()
export class UpsertOneInstitutionPositionArgs {

    @Field(() => InstitutionPositionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionPositionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionPositionWhereUniqueInput, 'id' | 'institution_id_position_type'>;

    @Field(() => InstitutionPositionCreateInput, {nullable:false})
    @Type(() => InstitutionPositionCreateInput)
    create!: InstitutionPositionCreateInput;

    @Field(() => InstitutionPositionUpdateInput, {nullable:false})
    @Type(() => InstitutionPositionUpdateInput)
    update!: InstitutionPositionUpdateInput;
}
