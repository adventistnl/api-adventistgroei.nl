import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentRequestCreateWithoutTemplateInput } from './assignment-request-create-without-template.input';
import { Type } from 'class-transformer';
import { AssignmentRequestCreateOrConnectWithoutTemplateInput } from './assignment-request-create-or-connect-without-template.input';
import { AssignmentRequestUpsertWithWhereUniqueWithoutTemplateInput } from './assignment-request-upsert-with-where-unique-without-template.input';
import { AssignmentRequestCreateManyTemplateInputEnvelope } from './assignment-request-create-many-template-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AssignmentRequestWhereUniqueInput } from './assignment-request-where-unique.input';
import { AssignmentRequestUpdateWithWhereUniqueWithoutTemplateInput } from './assignment-request-update-with-where-unique-without-template.input';
import { AssignmentRequestUpdateManyWithWhereWithoutTemplateInput } from './assignment-request-update-many-with-where-without-template.input';
import { AssignmentRequestScalarWhereInput } from './assignment-request-scalar-where.input';

@InputType()
export class AssignmentRequestUncheckedUpdateManyWithoutTemplateNestedInput {

    @Field(() => [AssignmentRequestCreateWithoutTemplateInput], {nullable:true})
    @Type(() => AssignmentRequestCreateWithoutTemplateInput)
    create?: Array<AssignmentRequestCreateWithoutTemplateInput>;

    @Field(() => [AssignmentRequestCreateOrConnectWithoutTemplateInput], {nullable:true})
    @Type(() => AssignmentRequestCreateOrConnectWithoutTemplateInput)
    connectOrCreate?: Array<AssignmentRequestCreateOrConnectWithoutTemplateInput>;

    @Field(() => [AssignmentRequestUpsertWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => AssignmentRequestUpsertWithWhereUniqueWithoutTemplateInput)
    upsert?: Array<AssignmentRequestUpsertWithWhereUniqueWithoutTemplateInput>;

    @Field(() => AssignmentRequestCreateManyTemplateInputEnvelope, {nullable:true})
    @Type(() => AssignmentRequestCreateManyTemplateInputEnvelope)
    createMany?: AssignmentRequestCreateManyTemplateInputEnvelope;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestWhereUniqueInput], {nullable:true})
    @Type(() => AssignmentRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssignmentRequestWhereUniqueInput, 'id'>>;

    @Field(() => [AssignmentRequestUpdateWithWhereUniqueWithoutTemplateInput], {nullable:true})
    @Type(() => AssignmentRequestUpdateWithWhereUniqueWithoutTemplateInput)
    update?: Array<AssignmentRequestUpdateWithWhereUniqueWithoutTemplateInput>;

    @Field(() => [AssignmentRequestUpdateManyWithWhereWithoutTemplateInput], {nullable:true})
    @Type(() => AssignmentRequestUpdateManyWithWhereWithoutTemplateInput)
    updateMany?: Array<AssignmentRequestUpdateManyWithWhereWithoutTemplateInput>;

    @Field(() => [AssignmentRequestScalarWhereInput], {nullable:true})
    @Type(() => AssignmentRequestScalarWhereInput)
    deleteMany?: Array<AssignmentRequestScalarWhereInput>;
}
