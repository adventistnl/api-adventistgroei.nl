import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutActivity_fundingInput } from './project-activity-create-without-activity-funding.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutActivity_fundingInput } from './project-activity-create-or-connect-without-activity-funding.input';
import { ProjectActivityUpsertWithoutActivity_fundingInput } from './project-activity-upsert-without-activity-funding.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';
import { ProjectActivityUpdateToOneWithWhereWithoutActivity_fundingInput } from './project-activity-update-to-one-with-where-without-activity-funding.input';

@InputType()
export class ProjectActivityUpdateOneRequiredWithoutActivity_fundingNestedInput {

    @Field(() => ProjectActivityCreateWithoutActivity_fundingInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutActivity_fundingInput)
    create?: ProjectActivityCreateWithoutActivity_fundingInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutActivity_fundingInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutActivity_fundingInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutActivity_fundingInput;

    @Field(() => ProjectActivityUpsertWithoutActivity_fundingInput, {nullable:true})
    @Type(() => ProjectActivityUpsertWithoutActivity_fundingInput)
    upsert?: ProjectActivityUpsertWithoutActivity_fundingInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;

    @Field(() => ProjectActivityUpdateToOneWithWhereWithoutActivity_fundingInput, {nullable:true})
    @Type(() => ProjectActivityUpdateToOneWithWhereWithoutActivity_fundingInput)
    update?: ProjectActivityUpdateToOneWithWhereWithoutActivity_fundingInput;
}
