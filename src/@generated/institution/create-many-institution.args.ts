import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionCreateManyInput } from './institution-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyInstitutionArgs {

    @Field(() => [InstitutionCreateManyInput], {nullable:false})
    @Type(() => InstitutionCreateManyInput)
    data!: Array<InstitutionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
