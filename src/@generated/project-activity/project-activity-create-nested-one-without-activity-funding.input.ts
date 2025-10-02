import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectActivityCreateWithoutActivity_fundingInput } from './project-activity-create-without-activity-funding.input';
import { Type } from 'class-transformer';
import { ProjectActivityCreateOrConnectWithoutActivity_fundingInput } from './project-activity-create-or-connect-without-activity-funding.input';
import { Prisma } from '@prisma/client';
import { ProjectActivityWhereUniqueInput } from './project-activity-where-unique.input';

@InputType()
export class ProjectActivityCreateNestedOneWithoutActivity_fundingInput {

    @Field(() => ProjectActivityCreateWithoutActivity_fundingInput, {nullable:true})
    @Type(() => ProjectActivityCreateWithoutActivity_fundingInput)
    create?: ProjectActivityCreateWithoutActivity_fundingInput;

    @Field(() => ProjectActivityCreateOrConnectWithoutActivity_fundingInput, {nullable:true})
    @Type(() => ProjectActivityCreateOrConnectWithoutActivity_fundingInput)
    connectOrCreate?: ProjectActivityCreateOrConnectWithoutActivity_fundingInput;

    @Field(() => ProjectActivityWhereUniqueInput, {nullable:true})
    @Type(() => ProjectActivityWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectActivityWhereUniqueInput, 'id'>;
}
