import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateManyChurchInput } from './assignment-request-create-many-church.input';
import { Type } from 'class-transformer';

@InputType()
export class AssignmentRequestCreateManyChurchInputEnvelope {

    @Field(() => [AssignmentRequestCreateManyChurchInput], {nullable:false})
    @Type(() => AssignmentRequestCreateManyChurchInput)
    data!: Array<AssignmentRequestCreateManyChurchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
