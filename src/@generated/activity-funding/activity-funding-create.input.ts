import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProjectActivityCreateNestedOneWithoutActivity_fundingInput } from '../project-activity/project-activity-create-nested-one-without-activity-funding.input';

@InputType()
export class ActivityFundingCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    activity_id!: string;

    @Field(() => EntityType, {nullable:false})
    entity_type!: `${EntityType}`;

    @Field(() => String, {nullable:false})
    entity_id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    entity_contribution_amount!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    entity_contribution_percent!: Decimal;

    @Field(() => Boolean, {nullable:true})
    validated?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => ProjectActivityCreateNestedOneWithoutActivity_fundingInput, {nullable:true})
    @Type(() => ProjectActivityCreateNestedOneWithoutActivity_fundingInput)
    project_activity?: ProjectActivityCreateNestedOneWithoutActivity_fundingInput;
}
