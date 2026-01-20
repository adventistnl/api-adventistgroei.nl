import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemUpdateWithoutSubsidy_requestInput } from './subsidy-request-item-update-without-subsidy-request.input';

@InputType()
export class SubsidyRequestItemUpdateWithWhereUniqueWithoutSubsidy_requestInput {

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemUpdateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateWithoutSubsidy_requestInput)
    data!: SubsidyRequestItemUpdateWithoutSubsidy_requestInput;
}
