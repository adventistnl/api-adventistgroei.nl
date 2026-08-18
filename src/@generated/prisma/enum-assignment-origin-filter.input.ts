import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssignmentOrigin } from './assignment-origin.enum';
import { NestedEnumAssignmentOriginFilter } from './nested-enum-assignment-origin-filter.input';

@InputType()
export class EnumAssignmentOriginFilter {

    @Field(() => AssignmentOrigin, {nullable:true})
    equals?: `${AssignmentOrigin}`;

    @Field(() => [AssignmentOrigin], {nullable:true})
    in?: Array<`${AssignmentOrigin}`>;

    @Field(() => [AssignmentOrigin], {nullable:true})
    notIn?: Array<`${AssignmentOrigin}`>;

    @Field(() => NestedEnumAssignmentOriginFilter, {nullable:true})
    not?: NestedEnumAssignmentOriginFilter;
}
