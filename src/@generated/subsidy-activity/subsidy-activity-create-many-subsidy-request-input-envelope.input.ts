import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityCreateManySubsidy_requestInput } from './subsidy-activity-create-many-subsidy-request.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyActivityCreateManySubsidy_requestInputEnvelope {

    @Field(() => [SubsidyActivityCreateManySubsidy_requestInput], {nullable:false})
    @Type(() => SubsidyActivityCreateManySubsidy_requestInput)
    data!: Array<SubsidyActivityCreateManySubsidy_requestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
