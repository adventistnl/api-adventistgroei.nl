import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyActivityWhereUniqueInput } from './subsidy-activity-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyActivityUpdateWithoutSubsidy_requestInput } from './subsidy-activity-update-without-subsidy-request.input';

@InputType()
export class SubsidyActivityUpdateWithWhereUniqueWithoutSubsidy_requestInput {

    @Field(() => SubsidyActivityWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyActivityWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyActivityWhereUniqueInput, 'id'>;

    @Field(() => SubsidyActivityUpdateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyActivityUpdateWithoutSubsidy_requestInput)
    data!: SubsidyActivityUpdateWithoutSubsidy_requestInput;
}
