import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChurchWhereInput } from './church-where.input';
import { Type } from 'class-transformer';
import { ChurchUpdateWithoutSubsidy_requestsInput } from './church-update-without-subsidy-requests.input';

@InputType()
export class ChurchUpdateToOneWithWhereWithoutSubsidy_requestsInput {

    @Field(() => ChurchWhereInput, {nullable:true})
    @Type(() => ChurchWhereInput)
    where?: ChurchWhereInput;

    @Field(() => ChurchUpdateWithoutSubsidy_requestsInput, {nullable:false})
    @Type(() => ChurchUpdateWithoutSubsidy_requestsInput)
    data!: ChurchUpdateWithoutSubsidy_requestsInput;
}
