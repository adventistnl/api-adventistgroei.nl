import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionUpdateInput } from './institution-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@ArgsType()
export class UpdateOneInstitutionArgs {

    @Field(() => InstitutionUpdateInput, {nullable:false})
    @Type(() => InstitutionUpdateInput)
    data!: InstitutionUpdateInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
