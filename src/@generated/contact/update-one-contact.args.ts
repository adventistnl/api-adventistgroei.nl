import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContactUpdateInput } from './contact-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ContactWhereUniqueInput } from './contact-where-unique.input';

@ArgsType()
export class UpdateOneContactArgs {

    @Field(() => ContactUpdateInput, {nullable:false})
    @Type(() => ContactUpdateInput)
    data!: ContactUpdateInput;

    @Field(() => ContactWhereUniqueInput, {nullable:false})
    @Type(() => ContactWhereUniqueInput)
    where!: Prisma.AtLeast<ContactWhereUniqueInput, 'id'>;
}
