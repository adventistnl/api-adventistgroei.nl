import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SubsidyRequestItemWhereUniqueInput } from './subsidy-request-item-where-unique.input';
import { Type } from 'class-transformer';
import { SubsidyRequestItemCreateWithoutSubsidy_requestInput } from './subsidy-request-item-create-without-subsidy-request.input';

@InputType()
export class SubsidyRequestItemCreateOrConnectWithoutSubsidy_requestInput {

    @Field(() => SubsidyRequestItemWhereUniqueInput, {nullable:false})
    @Type(() => SubsidyRequestItemWhereUniqueInput)
    where!: Prisma.AtLeast<SubsidyRequestItemWhereUniqueInput, 'id'>;

    @Field(() => SubsidyRequestItemCreateWithoutSubsidy_requestInput, {nullable:false})
    @Type(() => SubsidyRequestItemCreateWithoutSubsidy_requestInput)
    create!: SubsidyRequestItemCreateWithoutSubsidy_requestInput;
}
