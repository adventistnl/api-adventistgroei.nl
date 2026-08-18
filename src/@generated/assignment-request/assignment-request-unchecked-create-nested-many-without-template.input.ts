import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateWithoutTemplateInput } from './assignment-request-create-without-template.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateOrConnectWithoutTemplateInput } from './assignment-request-create-or-connect-without-template.input';
import { AssignmentRequestCreateManyTemplateInputEnvelope } from './assignment-request-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';

@InputType()
export class AssignmentRequestUncheckedCreateNestedManyWithoutTemplateInput {

    @Field(() => [AssignmentRequestCreateWithoutTemplateInput], {nullable:true})
    @Type(() => AssignmentRequestCreateWithoutTemplateInput)
    create?: Array<AssignmentRequestCreateWithoutTemplateInput>;

    @Field(() => [AssignmentRequestCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => AssignmentRequestCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<AssignmentRequestCreateOrConnectWithoutTemplateInput>;

    @Field(() => AssignmentRequestCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => AssignmentRequestCreateManyTemplateInputEnvelope)
    createMany?: AssignmentRequestCreateManyTemplateInputEnvelope;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;
}
