import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestUpdateWithoutSubsidy_statusInput } from './subsidy-request-update-without-subsidy-status.input';

@InputType()
export class SubsidyRequestUpdateWithWhereUniqueWithoutSubsidy_statusInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestUpdateWithoutSubsidy_statusInput, {nullable:false})
    @Type(() => SubsidyRequestUpdateWithoutSubsidy_statusInput)
    data!: SubsidyRequestUpdateWithoutSubsidy_statusInput;
}
