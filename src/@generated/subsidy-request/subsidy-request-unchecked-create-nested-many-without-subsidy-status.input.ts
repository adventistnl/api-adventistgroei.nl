import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateWithoutSubsidy_statusInput } from './subsidy-request-create-without-subsidy-status.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput } from './subsidy-request-create-or-connect-without-subsidy-status.input';
import { SubsidyRequestCreateManySubsidy_statusInputEnvelope } from './subsidy-request-create-many-subsidy-status-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';

@InputType()
export class SubsidyRequestUncheckedCreateNestedManyWithoutSubsidy_statusInput {

    @Field(() => [SubsidyRequestCreateWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_statusInput)
    create?: Array<SubsidyRequestCreateWithoutSubsidy_statusInput>;

    @Field(() => [SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput], {nullable:true})
    @Type(() => SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput)
    connectOrCreate?: Array<SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput>;

    @Field(() => SubsidyRequestCreateManySubsidy_statusInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestCreateManySubsidy_statusInputEnvelope)
    createMany?: SubsidyRequestCreateManySubsidy_statusInputEnvelope;

    @Field(() => [SubsidyRequestWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>>;
}
