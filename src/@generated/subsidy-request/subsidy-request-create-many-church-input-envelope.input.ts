import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateManyChurchInput } from './subsidy-request-create-many-church.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestCreateManyChurchInputEnvelope {

    @Field(() => [SubsidyRequestCreateManyChurchInput], {nullable:false})
    @Type(() => SubsidyRequestCreateManyChurchInput)
    data!: Array<SubsidyRequestCreateManyChurchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
