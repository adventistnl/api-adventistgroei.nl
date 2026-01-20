import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { ProjectCreateNestedOneWithoutSpecial_projectsInput } from '../project/project-create-nested-one-without-special-projects.input';

@InputType()
export class SpecialProjectsCreateWithoutSubsidy_statusInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    department_id!: string;

    @Field(() => String, {nullable:true})
    institution_id?: string;

    @Field(() => String, {nullable:true})
    justification_note?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    budget?: Decimal;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => String, {nullable:true})
    location_church_plant?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => String, {nullable:false})
    created_by!: string;

    @Field(() => String, {nullable:false})
    updated_by!: string;

    @Field(() => Boolean, {nullable:true})
    is_deleted?: boolean;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    deleted_by?: string;

    @Field(() => ProjectCreateNestedOneWithoutSpecial_projectsInput, {nullable:true})
    @Type(() => ProjectCreateNestedOneWithoutSpecial_projectsInput)
    project?: ProjectCreateNestedOneWithoutSpecial_projectsInput;
}
