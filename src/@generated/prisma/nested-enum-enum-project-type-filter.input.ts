import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumProjectType } from './enum-project-type.enum';

@InputType()
export class NestedEnumEnumProjectTypeFilter {

    @Field(() => EnumProjectType, {nullable:true})
    equals?: `${EnumProjectType}`;

    @Field(() => [EnumProjectType], {nullable:true})
    in?: Array<`${EnumProjectType}`>;

    @Field(() => [EnumProjectType], {nullable:true})
    notIn?: Array<`${EnumProjectType}`>;

    @Field(() => NestedEnumEnumProjectTypeFilter, {nullable:true})
    not?: NestedEnumEnumProjectTypeFilter;
}
