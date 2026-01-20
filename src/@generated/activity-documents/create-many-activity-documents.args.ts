import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityDocumentsCreateManyInput } from './activity-documents-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyActivityDocumentsArgs {

    @Field(() => [ActivityDocumentsCreateManyInput], {nullable:false})
    @Type(() => ActivityDocumentsCreateManyInput)
    data!: Array<ActivityDocumentsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
