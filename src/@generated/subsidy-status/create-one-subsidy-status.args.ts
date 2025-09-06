import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyStatusCreateInput } from './subsidy-status-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubsidyStatusArgs {

    @Field(() => SubsidyStatusCreateInput, {nullable:false})
    @Type(() => SubsidyStatusCreateInput)
    data!: SubsidyStatusCreateInput;
}
