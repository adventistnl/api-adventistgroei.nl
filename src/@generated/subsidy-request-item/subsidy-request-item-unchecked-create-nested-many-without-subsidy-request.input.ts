import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestItemCreateWithoutSubsidy_requestInput } from './subsidy-request-item-create-without-subsidy-request.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput } from './subsidy-request-item-create-or-connect-without-subsidy-request.input';
import { SubsidyRequestItemCreateManySubsidy_requestInputEnvelope } from './subsidy-request-item-create-many-subsidy-request-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';

@InputType()
export class SubsidyRequestItemUncheckedCreateNestedManyWithoutSubsidy_requestInput {

    @Field(() => [SubsidyRequestItemCreateWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyRequestItemCreateWithoutSubsidy_requestInput)
    create?: Array<SubsidyRequestItemCreateWithoutSubsidy_requestInput>;

    @Field(() => [SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput], {nullable:true})
    @Type(() => SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput)
    connectOrCreate?: Array<SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput>;

    @Field(() => SubsidyRequestItemCreateManySubsidy_requestInputEnvelope, {nullable:true})
    @Type(() => SubsidyRequestItemCreateManySubsidy_requestInputEnvelope)
    createMany?: SubsidyRequestItemCreateManySubsidy_requestInputEnvelope;

    @Field(() => [SubsidyRequestItemWhereUniqueInput], {nullable:true})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>>;
}
