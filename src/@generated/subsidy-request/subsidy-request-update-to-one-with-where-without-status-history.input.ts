import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutStatus_historyInput } from './subsidy-request-update-without-status-history.input';

@InputType()
export class SubsidyRequestUpdateToOneWithWhereWithoutStatus_historyInput {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestUpdateWithoutStatus_historyInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutStatus_historyInput)
    data!: SubsidyRequestUpdateWithoutStatus_historyInput;
}
