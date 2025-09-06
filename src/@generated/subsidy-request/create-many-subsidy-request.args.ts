import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestCreateManyInput } from './subsidy-request-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubsidyRequestArgs {

    @Field(() => [SubsidyRequestCreateManyInput], {nullable:false})
    @Type(() => SubsidyRequestCreateManyInput)
    data!: Array<SubsidyRequestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
