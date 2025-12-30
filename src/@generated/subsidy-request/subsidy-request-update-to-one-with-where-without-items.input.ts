import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestWhereInput } from './subsidy-request-where.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutItemsInput } from './subsidy-request-update-without-items.input';

@InputType()
export class SubsidyRequestUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => SubsidyRequestWhereInput, {nullable:true})
    @Type(() => SubsidyRequestWhereInput)
    where?: SubsidyRequestWhereInput;

    @Field(() => SubsidyRequestUpdateWithoutItemsInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutItemsInput)
    data!: SubsidyRequestUpdateWithoutItemsInput;
}
