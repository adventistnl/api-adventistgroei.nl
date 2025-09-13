import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateManyProjectInput } from './subsidy-request-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestCreateManyProjectInputEnvelope {

    @Field(() => [SubsidyRequestCreateManyProjectInput], {nullable:false})
    @Type(() => SubsidyRequestCreateManyProjectInput)
    data!: Array<SubsidyRequestCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
