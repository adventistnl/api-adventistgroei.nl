import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyActivityCreateWithoutSubsidy_requestInput } from './subsidy-activity-create-without-subsidy-request.input';

@InputType()
export class SubsidyActivityCreateOrConnectWithoutSubsidy_requestInput {

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyActivityWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;

    @Field(() => SubsidyActivityCreateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyActivityCreateWithoutSubsidy_requestInput)
    create!: SubsidyActivityCreateWithoutSubsidy_requestInput;
}
