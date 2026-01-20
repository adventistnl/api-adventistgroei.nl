import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemUpdateWithoutSubsidy_requestInput } from './subsidy-request-item-update-without-subsidy-request.input';
import { SubsidyRequestItemCreateWithoutSubsidy_requestInput } from './subsidy-request-item-create-without-subsidy-request.input';

@InputType()
export class SubsidyRequestItemUpsertWithWhereUniqueWithoutSubsidy_requestInput {

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemUpdateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyRequestItemUpdateWithoutSubsidy_requestInput)
    update!: SubsidyRequestItemUpdateWithoutSubsidy_requestInput;

    @Field(() => SubsidyRequestItemCreateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyRequestItemCreateWithoutSubsidy_requestInput)
    create!: SubsidyRequestItemCreateWithoutSubsidy_requestInput;
}
