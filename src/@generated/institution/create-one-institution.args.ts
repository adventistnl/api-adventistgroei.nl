import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionCreateInput } from './institution-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneInstitutionArgs {

    @Field(() => InstitutionCreateInput, {nullable:false})
    @Type(() => InstitutionCreateInput)
    data!: InstitutionCreateInput;
}
