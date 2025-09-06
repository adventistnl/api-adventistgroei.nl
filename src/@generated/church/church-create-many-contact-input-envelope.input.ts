import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchCreateManyContactInput } from './church-create-many-contact.input';
import { Type } from 'class-transformer';

@InputType()
export class ChurchCreateManyContactInputEnvelope {

    @Field(() => [ChurchCreateManyContactInput], {nullable:false})
    @Type(() => ChurchCreateManyContactInput)
    data!: Array<ChurchCreateManyContactInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
