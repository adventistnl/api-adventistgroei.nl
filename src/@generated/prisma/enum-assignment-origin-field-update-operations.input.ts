import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentOrigin } from './assignment-origin.enum';

@InputType()
export class EnumAssignmentOriginFieldUpdateOperationsInput {

    @Field(() => AssignmentOrigin, {nullable:true})
    set?: `${AssignmentOrigin}`;
}
