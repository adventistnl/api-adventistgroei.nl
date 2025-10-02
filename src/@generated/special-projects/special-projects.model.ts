import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { Project } from '../project/project.model';
import { SubsidyStatus } from '../subsidy-status/subsidy-status.model';

@ObjectType()
export class SpecialProjects {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:true})
    institution_id!: string | null;

    @Field(() => String, {nullable:true})
    project_id!: string | null;

    @Field(() => String, {nullable:true})
    justification_note!: string | null;

    @Field(() => GraphQLDecimal, {nullable:true})
    budget!: Decimal | null;

    @Field(() => String, {nullable:false})
    subsidy_status_id!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:true})
    location_church_plant!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    is_deleted!: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at!: Date | null;

    @Field(() => String, {nullable:true})
    deleted_by!: string | null;

    @Field(() => Project, {nullable:true})
    project?: Project | null;

    @Field(() => SubsidyStatus, {nullable:true})
    subsidy_status?: SubsidyStatus | null;
}
