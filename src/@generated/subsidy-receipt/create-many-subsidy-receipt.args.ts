import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyReceiptCreateManyInput } from './subsidy-receipt-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubsidyReceiptArgs {

    @Field(() => [SubsidyReceiptCreateManyInput], {nullable:false})
    @Type(() => SubsidyReceiptCreateManyInput)
    data!: Array<SubsidyReceiptCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
