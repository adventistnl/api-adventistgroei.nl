import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionPositionCreateInput } from './institution-position-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInstitutionPositionArgs {

    @Field(() => InstitutionPositionCreateInput, {nullable:false})
    @Type(() => InstitutionPositionCreateInput)
    data!: InstitutionPositionCreateInput;
}
