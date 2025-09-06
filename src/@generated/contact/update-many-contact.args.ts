import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContactUpdateManyMutationInput } from './contact-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContactWhereInput } from './contact-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyContactArgs {

    @Field(() => ContactUpdateManyMutationInput, {nullable:false})
    @Type(() => ContactUpdateManyMutationInput)
    data!: ContactUpdateManyMutationInput;

    @Field(() => ContactWhereInput, {nullable:true})
    @Type(() => ContactWhereInput)
    where?: ContactWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
