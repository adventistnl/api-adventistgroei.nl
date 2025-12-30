import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateInput } from './subsidy-request-item-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubsidyRequestItemArgs {

    @Field(() => SubsidyRequestItemCreateInput, {nullable:false})
    @Type(() => SubsidyRequestItemCreateInput)
    data!: SubsidyRequestItemCreateInput;
}
