import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyActivityCreateWithoutSubsidy_requestInput } from './subsidy-activity-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput } from './subsidy-activity-create-or-connect-without-subsidy-request.input';
import { SubsidyActivityCreateManySubsidy_requestInputEnvelope } from './subsidy-activity-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';

@InputType()
export class SubsidyActivityUncheckedCreateNestedManyWithoutSubsidy_requestInput {

    @Field(() => [SubsidyActivityCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyActivityCreateWithoutSubsidy_requestInput)
    create?: Array<SubsidyActivityCreateWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => SubsidyActivityCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => SubsidyActivityCreateManySubsidy_requestInputEnvelope)
    createMany?: SubsidyActivityCreateManySubsidy_requestInputEnvelope;

    @Field(() => [SubsidyActivityWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyActivityWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>>;
}
