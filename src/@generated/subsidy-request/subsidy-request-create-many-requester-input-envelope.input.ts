import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateManyRequesterInput } from './subsidy-request-create-many-requester.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestCreateManyRequesterInputEnvelope {

    @Field(() => [SubsidyRequestCreateManyRequesterInput], {nullable:false})
    @Type(() => SubsidyRequestCreateManyRequesterInput)
    data!: Array<SubsidyRequestCreateManyRequesterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
