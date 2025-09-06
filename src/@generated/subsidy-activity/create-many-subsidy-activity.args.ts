import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyActivityCreateManyInput } from './subsidy-activity-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubsidyActivityArgs {

    @Field(() => [SubsidyActivityCreateManyInput], {nullable:false})
    @Type(() => SubsidyActivityCreateManyInput)
    data!: Array<SubsidyActivityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
