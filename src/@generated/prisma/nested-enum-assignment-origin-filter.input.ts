import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentOrigin } from './assignment-origin.enum';

@InputType()
export class NestedEnumAssignmentOriginFilter {

    @Field(() => AssignmentOrigin, {nullable:true})
    equals?: `${AssignmentOrigin}`;

    @Field(() => [AssignmentOrigin], {nullable:true})
    in?: Array<`${AssignmentOrigin}`>;

    @Field(() => [AssignmentOrigin], {nullable:true})
    notIn?: Array<`${AssignmentOrigin}`>;

    @Field(() => NestedEnumAssignmentOriginFilter, {nullable:true})
    not?: NestedEnumAssignmentOriginFilter;
}
