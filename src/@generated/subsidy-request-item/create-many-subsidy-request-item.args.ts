import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateManyInput } from './subsidy-request-item-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySubsidyRequestItemArgs {

    @Field(() => [SubsidyRequestItemCreateManyInput], {nullable:false})
    @Type(() => SubsidyRequestItemCreateManyInput)
    data!: Array<SubsidyRequestItemCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
