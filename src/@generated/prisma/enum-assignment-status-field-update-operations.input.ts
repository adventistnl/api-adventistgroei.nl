import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentStatus } from './assignment-status.enum';

@InputType()
export class EnumAssignmentStatusFieldUpdateOperationsInput {

    @Field(() => AssignmentStatus, {nullable:true})
    set?: `${AssignmentStatus}`;
}
