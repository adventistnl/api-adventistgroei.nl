import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactUpdateWithoutRegionInput } from './contact-update-without-region.input';
import { Type } from 'class-transformer';
import { ContactCreateWithoutRegionInput } from './contact-create-without-region.input';
import { ContactWhereInput } from './contact-where.input';

@InputType()
export class ContactUpsertWithoutRegionInput {

    @Field(() => ContactUpdateWithoutRegionInput, {nullable:false})
    @Type(() => ContactUpdateWithoutRegionInput)
    update!: ContactUpdateWithoutRegionInput;

    @Field(() => ContactCreateWithoutRegionInput, {nullable:false})
    @Type(() => ContactCreateWithoutRegionInput)
    create!: ContactCreateWithoutRegionInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;
}
