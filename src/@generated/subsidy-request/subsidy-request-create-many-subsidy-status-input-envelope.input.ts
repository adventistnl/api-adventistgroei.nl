import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateManySubsidy_statusInput } from './subsidy-request-create-many-subsidy-status.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestCreateManySubsidy_statusInputEnvelope {

    @Field(() => [SubsidyRequestCreateManySubsidy_statusInput], {nullable:false})
    @Type(() => SubsidyRequestCreateManySubsidy_statusInput)
    data!: Array<SubsidyRequestCreateManySubsidy_statusInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
