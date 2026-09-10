import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class GapReportSnapshotUncheckedUpdateManyWithoutInstitutionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    month?: StringFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    churches_without_preacher?: any;

    @Field(() => GraphQLJSON, {nullable:true})
    preachers_without_assignment?: any;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    computed_at?: DateTimeFieldUpdateOperationsInput;
}
