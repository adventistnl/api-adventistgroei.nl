import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionScalarWhereInput } from './institution-position-scalar-where.input';
import { Type } from 'class-transformer';
import { InstitutionPositionUpdateManyMutationInput } from './institution-position-update-many-mutation.input';

@InputType()
export class InstitutionPositionUpdateManyWithWhereWithoutUserInput {

    @Field(() => InstitutionPositionScalarWhereInput, {nullable:false})
    @Type(() => InstitutionPositionScalarWhereInput)
    where!: InstitutionPositionScalarWhereInput;

    @Field(() => InstitutionPositionUpdateManyMutationInput, {nullable:false})
    @Type(() => InstitutionPositionUpdateManyMutationInput)
    data!: InstitutionPositionUpdateManyMutationInput;
}
