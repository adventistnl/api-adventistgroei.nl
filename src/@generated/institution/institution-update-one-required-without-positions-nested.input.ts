import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutPositionsInput } from './institution-create-without-positions.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutPositionsInput } from './institution-create-or-connect-without-positions.input';
import { InstitutionUpsertWithoutPositionsInput } from './institution-upsert-without-positions.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutPositionsInput } from './institution-update-to-one-with-where-without-positions.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutPositionsNestedInput {

    @Field(() => InstitutionCreateWithoutPositionsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutPositionsInput)
    create?: InstitutionCreateWithoutPositionsInput;

    @Field(() => InstitutionCreateOrConnectWithoutPositionsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutPositionsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutPositionsInput;

    @Field(() => InstitutionUpsertWithoutPositionsInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutPositionsInput)
    upsert?: InstitutionUpsertWithoutPositionsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutPositionsInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutPositionsInput)
    update?: InstitutionUpdateToOneWithWhereWithoutPositionsInput;
}
