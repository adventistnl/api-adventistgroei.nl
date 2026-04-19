import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionCreateManyUserInput } from './institution-position-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class InstitutionPositionCreateManyUserInputEnvelope {

    @Field(() => [InstitutionPositionCreateManyUserInput], {nullable:false})
    @Type(() => InstitutionPositionCreateManyUserInput)
    data!: Array<InstitutionPositionCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
