import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutDirect_messagesInput } from './institution-create-without-direct-messages.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutDirect_messagesInput } from './institution-create-or-connect-without-direct-messages.input';
import { InstitutionUpsertWithoutDirect_messagesInput } from './institution-upsert-without-direct-messages.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { InstitutionUpdateToOneWithWhereWithoutDirect_messagesInput } from './institution-update-to-one-with-where-without-direct-messages.input';

@InputType()
export class InstitutionUpdateOneRequiredWithoutDirect_messagesNestedInput {

    @Field(() => InstitutionCreateWithoutDirect_messagesInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutDirect_messagesInput)
    create?: InstitutionCreateWithoutDirect_messagesInput;

    @Field(() => InstitutionCreateOrConnectWithoutDirect_messagesInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutDirect_messagesInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutDirect_messagesInput;

    @Field(() => InstitutionUpsertWithoutDirect_messagesInput, {nullable:true})
    @Type(() => InstitutionUpsertWithoutDirect_messagesInput)
    upsert?: InstitutionUpsertWithoutDirect_messagesInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionUpdateToOneWithWhereWithoutDirect_messagesInput, {nullable:true})
    @Type(() => InstitutionUpdateToOneWithWhereWithoutDirect_messagesInput)
    update?: InstitutionUpdateToOneWithWhereWithoutDirect_messagesInput;
}
