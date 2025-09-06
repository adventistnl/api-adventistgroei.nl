import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateManyAssigned_userInput } from './subsidy-status-create-many-assigned-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyStatusCreateManyAssigned_userInputEnvelope {

    @Field(() => [SubsidyStatusCreateManyAssigned_userInput], {nullable:false})
    @Type(() => SubsidyStatusCreateManyAssigned_userInput)
    data!: Array<SubsidyStatusCreateManyAssigned_userInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
