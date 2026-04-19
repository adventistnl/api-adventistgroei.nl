import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionPositionType } from './institution-position-type.enum';

@InputType()
export class NestedEnumInstitutionPositionTypeFilter {

    @Field(() => InstitutionPositionType, {nullable:true})
    equals?: `${InstitutionPositionType}`;

    @Field(() => [InstitutionPositionType], {nullable:true})
    in?: Array<`${InstitutionPositionType}`>;

    @Field(() => [InstitutionPositionType], {nullable:true})
    notIn?: Array<`${InstitutionPositionType}`>;

    @Field(() => NestedEnumInstitutionPositionTypeFilter, {nullable:true})
    not?: NestedEnumInstitutionPositionTypeFilter;
}
