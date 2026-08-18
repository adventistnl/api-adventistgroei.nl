import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentCreateManyChurchInput } from './assignment-create-many-church.input';
import { Type } from 'class-transformer';

@InputType()
export class AssignmentCreateManyChurchInputEnvelope {

    @Field(() => [AssignmentCreateManyChurchInput], {nullable:false})
    @Type(() => AssignmentCreateManyChurchInput)
    data!: Array<AssignmentCreateManyChurchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
