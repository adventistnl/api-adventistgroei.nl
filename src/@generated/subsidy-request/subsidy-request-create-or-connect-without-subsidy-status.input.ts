import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestWhereUniqueInput } from './subsidy-request-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestCreateWithoutSubsidy_statusInput } from './subsidy-request-create-without-subsidy-status.input';

@InputType()
export class SubsidyRequestCreateOrConnectWithoutSubsidy_statusInput {

    @Field(() => SubsidyRequestWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestCreateWithoutSubsidy_statusInput, {nullable:false})
    @Type(() => SubsidyRequestCreateWithoutSubsidy_statusInput)
    create!: SubsidyRequestCreateWithoutSubsidy_statusInput;
}
