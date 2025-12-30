import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestUpdateWithoutItemsInput } from './subsidy-request-update-without-items.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutItemsInput } from './subsidy-request-create-without-items.input';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';

@InputType()
export class SubsidyRequestUpsertWithoutItemsInput {

    @Field(() => SubsidyRequestUpdateWithoutItemsInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutItemsInput)
    update!: SubsidyRequestUpdateWithoutItemsInput;

    @Field(() => SubsidyRequestCreateWithoutItemsInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutItemsInput)
    create!: SubsidyRequestCreateWithoutItemsInput;

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;
}
