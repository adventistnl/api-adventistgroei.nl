import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDocumentsCreateInput } from './activity-documents-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneActivityDocumentsArgs {

    @Field(() => ActivityDocumentsCreateInput, {nullable:false})
    @Type(() => ActivityDocumentsCreateInput)
    data!: ActivityDocumentsCreateInput;
}
