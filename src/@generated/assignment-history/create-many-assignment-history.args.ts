import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AssignmentHistoryCreateManyInput } from './assignment-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAssignmentHistoryArgs {

    @Field(() => [AssignmentHistoryCreateManyInput], {nullable:false})
    @Type(() => AssignmentHistoryCreateManyInput)
    data!: Array<AssignmentHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
