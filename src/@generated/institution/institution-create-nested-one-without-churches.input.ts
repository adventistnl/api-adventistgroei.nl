import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutChurchesInput } from './institution-create-without-churches.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutChurchesInput } from './institution-create-or-connect-without-churches.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutChurchesInput {

    @Field(() => InstitutionCreateWithoutChurchesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutChurchesInput)
    create?: InstitutionCreateWithoutChurchesInput;

    @Field(() => InstitutionCreateOrConnectWithoutChurchesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutChurchesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutChurchesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
