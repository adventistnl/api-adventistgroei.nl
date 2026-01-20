import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityDocumentsScalarWhereInput } from './activity-documents-scalar-where.input';
import { Type } from 'class-transformer';
import { ActivityDocumentsUpdateManyMutationInput } from './activity-documents-update-many-mutation.input';

@InputType()
export class ActivityDocumentsUpdateManyWithWhereWithoutProject_activityInput {

    @Field(() => ActivityDocumentsScalarWhereInput, {nullable:false})
    @Type(() => ActivityDocumentsScalarWhereInput)
    where!: ActivityDocumentsScalarWhereInput;

    @Field(() => ActivityDocumentsUpdateManyMutationInput, {nullable:false})
    @Type(() => ActivityDocumentsUpdateManyMutationInput)
    data!: ActivityDocumentsUpdateManyMutationInput;
}
