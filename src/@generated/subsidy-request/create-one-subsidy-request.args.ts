import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestCreateInput } from './subsidy-request-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubsidyRequestArgs {

    @Field(() => SubsidyRequestCreateInput, {nullable:false})
    @Type(() => SubsidyRequestCreateInput)
    data!: SubsidyRequestCreateInput;
}
