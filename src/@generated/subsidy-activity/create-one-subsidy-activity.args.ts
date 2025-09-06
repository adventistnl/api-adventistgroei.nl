import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyActivityCreateInput } from './subsidy-activity-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSubsidyActivityArgs {

    @Field(() => SubsidyActivityCreateInput, {nullable:false})
    @Type(() => SubsidyActivityCreateInput)
    data!: SubsidyActivityCreateInput;
}
