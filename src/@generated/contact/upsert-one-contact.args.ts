import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';
import { Type } from 'class-transformer';
import { ContactCreateInput } from './contact-create.input';
import { ContactUpdateInput } from './contact-update.input';

@ArgsType()
export class UpsertOneContactArgs {

    @Field(() => ContactWhereUniqueInput, {nullable:false})
    @Type(() => ContactWhereUniqueInput)
    where!: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;

    @Field(() => ContactCreateInput, {nullable:false})
    @Type(() => ContactCreateInput)
    create!: ContactCreateInput;

    @Field(() => ContactUpdateInput, {nullable:false})
    @Type(() => ContactUpdateInput)
    update!: ContactUpdateInput;
}
