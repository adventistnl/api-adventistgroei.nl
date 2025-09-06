import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateInput } from './institution-create.input';
import { InstitutionUpdateInput } from './institution-update.input';

@ArgsType()
export class UpsertOneInstitutionArgs {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateInput, {nullable:false})
    @Type(() => InstitutionCreateInput)
    create!: InstitutionCreateInput;

    @Field(() => InstitutionUpdateInput, {nullable:false})
    @Type(() => InstitutionUpdateInput)
    update!: InstitutionUpdateInput;
}
