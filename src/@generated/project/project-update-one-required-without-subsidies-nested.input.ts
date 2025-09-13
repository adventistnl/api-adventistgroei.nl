import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutSubsidiesInput } from './project-create-without-subsidies.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutSubsidiesInput } from './project-create-or-connect-without-subsidies.input';
import { ProjectUpsertWithoutSubsidiesInput } from './project-upsert-without-subsidies.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { ProjectUpdateToOneWithWhereWithoutSubsidiesInput } from './project-update-to-one-with-where-without-subsidies.input';

@InputType()
export class ProjectUpdateOneRequiredWithoutSubsidiesNestedInput {

    @Field(() => ProjectCreateWithoutSubsidiesInput, {nullable:true})
    @Type(() => ProjectCreateWithoutSubsidiesInput)
    create?: ProjectCreateWithoutSubsidiesInput;

    @Field(() => ProjectCreateOrConnectWithoutSubsidiesInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutSubsidiesInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutSubsidiesInput;

    @Field(() => ProjectUpsertWithoutSubsidiesInput, {nullable:true})
    @Type(() => ProjectUpsertWithoutSubsidiesInput)
    upsert?: ProjectUpsertWithoutSubsidiesInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectUpdateToOneWithWhereWithoutSubsidiesInput, {nullable:true})
    @Type(() => ProjectUpdateToOneWithWhereWithoutSubsidiesInput)
    update?: ProjectUpdateToOneWithWhereWithoutSubsidiesInput;
}
