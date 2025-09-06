import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContactWhereInput } from './contact-where.input';
import { Type } from 'class-transformer';
import { ContactUpdateWithoutRegionInput } from './contact-update-without-region.input';

@InputType()
export class ContactUpdateToOneWithWhereWithoutRegionInput {

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => ContactUpdateWithoutRegionInput, {nullable:false})
    @Type(() => ContactUpdateWithoutRegionInput)
    data!: ContactUpdateWithoutRegionInput;
}
