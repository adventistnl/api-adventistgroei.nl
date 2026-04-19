import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionType } from './institution-position-type.enum';
import { NestedEnumInstitutionPositionTypeFilter } from './nested-enum-institution-position-type-filter.input';

@InputType()
export class EnumInstitutionPositionTypeFilter {

    @Field(() => InstitutionPositionType, {nullable:true})
    equals?: `${InstitutionPositionType}`;

    @Field(() => [InstitutionPositionType], {nullable:true})
    in?: Array<`${InstitutionPositionType}`>;

    @Field(() => [InstitutionPositionType], {nullable:true})
    notIn?: Array<`${InstitutionPositionType}`>;

    @Field(() => NestedEnumInstitutionPositionTypeFilter, {nullable:true})
    not?: NestedEnumInstitutionPositionTypeFilter;
}
