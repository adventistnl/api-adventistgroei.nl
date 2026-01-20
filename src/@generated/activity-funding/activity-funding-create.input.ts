import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Float } from '@nestjs/graphql';
import { EntityType } from '../prisma/entity-type.enum';
import { ProjectActivityCreateNestedOneWithoutActivity_fundingInput } from '../project-activity/project-activity-create-nested-one-without-activity-funding.input';

@InputType()
export class ActivityFundingCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    entity_contribution_amount!: Decimal;

    @Field(() => Float, {nullable:false})
    entity_contribution_percent!: number;

    @Field(() => EntityType, {nullable:false})
    entity_type!: `${EntityType}`;

    @Field(() => String, {nullable:false})
    entity_id!: string;

    @Field(() => Boolean, {nullable:true})
    validated?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:true})
    created_by?: string;

    @Field(() => String, {nullable:true})
    updated_by?: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => ProjectActivityCreateNestedOneWithoutActivity_fundingInput, {nullable:false})
    @Type(() => ProjectActivityCreateNestedOneWithoutActivity_fundingInput)
    activity!: ProjectActivityCreateNestedOneWithoutActivity_fundingInput;
}
