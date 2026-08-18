import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssignmentWhereUniqueInput } from './assignment-where-unique.input';
import { Type } from 'class-transformer';
import { AssignmentCreateWithoutUserInput } from './assignment-create-without-user.input';

@InputType()
export class AssignmentCreateOrConnectWithoutUserInput {

    @Field(() => AssignmentWhereUniqueInput, {nullable:false})
    @Type(() => AssignmentWhereUniqueInput)
    where!: Prisma.AtLeast<AssignmentWhereUniqueInput, 'id' | 'church_id_date'>;

    @Field(() => AssignmentCreateWithoutUserInput, {nullable:false})
    @Type(() => AssignmentCreateWithoutUserInput)
    create!: AssignmentCreateWithoutUserInput;
}
