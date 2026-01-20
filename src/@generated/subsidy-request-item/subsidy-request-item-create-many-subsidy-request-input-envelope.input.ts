import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateManySubsidy_requestInput } from './subsidy-request-item-create-many-subsidy-request.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestItemCreateManySubsidy_requestInputEnvelope {

    @Field(() => [SubsidyRequestItemCreateManySubsidy_requestInput], {nullable:false})
    @Type(() => SubsidyRequestItemCreateManySubsidy_requestInput)
    data!: Array<SubsidyRequestItemCreateManySubsidy_requestInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
