import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateManyTemplateInput } from './assignment-request-create-many-template.input';
import { Type } from 'class-transformer';

@InputType()
export class AssignmentRequestCreateManyTemplateInputEnvelope {

    @Field(() => [AssignmentRequestCreateManyTemplateInput], {nullable:false})
    @Type(() => AssignmentRequestCreateManyTemplateInput)
    data!: Array<AssignmentRequestCreateManyTemplateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
