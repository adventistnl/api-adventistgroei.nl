import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutPositionsInput } from './institution-create-without-positions.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutPositionsInput } from './institution-create-or-connect-without-positions.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutPositionsInput {

    @Field(() => InstitutionCreateWithoutPositionsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutPositionsInput)
    create?: InstitutionCreateWithoutPositionsInput;

    @Field(() => InstitutionCreateOrConnectWithoutPositionsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutPositionsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutPositionsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
