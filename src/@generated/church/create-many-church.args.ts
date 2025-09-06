import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChurchCreateManyInput } from './church-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChurchArgs {

    @Field(() => [ChurchCreateManyInput], {nullable:false})
    @Type(() => ChurchCreateManyInput)
    data!: Array<ChurchCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
