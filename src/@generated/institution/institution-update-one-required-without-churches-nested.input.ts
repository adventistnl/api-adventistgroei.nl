import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutChurchesInput } from './institution-create-without-churches.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutChurchesInput } from './institution-create-or-connect-without-churches.input';
import { InstitutionUpsertWithoutChurchesInput } from './institution-upsert-without-churches.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutChurchesInput } from './institution-update-to-one-with-where-without-churches.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutChurchesNestedInput {

    @Field(() => InstitutionCreateWithoutChurchesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutChurchesInput)
    create?: InstitutionCreateWithoutChurchesInput;

    @Field(() => InstitutionCreateOrConnectWithoutChurchesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutChurchesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutChurchesInput;

    @Field(() => InstitutionUpsertWithoutChurchesInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutChurchesInput)
    upsert?: InstitutionUpsertWithoutChurchesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutChurchesInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutChurchesInput)
    update?: InstitutionUpdateToOneWithWhereWithoutChurchesInput;
}
