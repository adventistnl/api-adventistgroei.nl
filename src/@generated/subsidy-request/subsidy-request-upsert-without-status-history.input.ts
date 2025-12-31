import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestUpdateWithoutStatus_historyInput } from './subsidy-request-update-without-status-history.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutStatus_historyInput } from './subsidy-request-create-without-status-history.input';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';

@InputType()
export class SubsidyRequestUpsertWithoutStatus_historyInput {

    @Field(() => SubsidyRequestUpdateWithoutStatus_historyInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutStatus_historyInput)
    update!: SubsidyRequestUpdateWithoutStatus_historyInput;

    @Field(() => SubsidyRequestCreateWithoutStatus_historyInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutStatus_historyInput)
    create!: SubsidyRequestCreateWithoutStatus_historyInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;
}
