import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchCreateInput } from './church-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneChurchArgs {

    @Field(() => ChurchCreateInput, {nullable:false})
    @Type(() => ChurchCreateInput)
    data!: ChurchCreateInput;
}
