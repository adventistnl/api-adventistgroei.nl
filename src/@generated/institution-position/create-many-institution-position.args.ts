import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { InstitutionPositionCreateManyInput } from './institution-position-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyInstitutionPositionArgs {

    @Field(() => [InstitutionPositionCreateManyInput], {nullable:false})
    @Type(() => InstitutionPositionCreateManyInput)
    data!: Array<InstitutionPositionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
