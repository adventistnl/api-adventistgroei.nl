import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutSubsidy_statusInput } from './subsidy-request-update-without-subsidy-status.input';
import { SubsidyRequestCreateWithoutSubsidy_statusInput } from './subsidy-request-create-without-subsidy-status.input';

@InputType()
export class SubsidyRequestUpsertWithWhereUniqueWithoutSubsidy_statusInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateWithoutSubsidy_statusInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutSubsidy_statusInput)
    update!: SubsidyRequestUpdateWithoutSubsidy_statusInput;

    @Field(() => SubsidyRequestCreateWithoutSubsidy_statusInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_statusInput)
    create!: SubsidyRequestCreateWithoutSubsidy_statusInput;
}
