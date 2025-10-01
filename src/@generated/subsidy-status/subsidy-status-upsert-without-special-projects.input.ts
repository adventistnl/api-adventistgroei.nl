import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusUpdateWithoutSpecial_projectsInput } from './subsidy-status-update-without-special-projects.input';
import { Type } from 'class-transformer';
import { SubsidyStatusCreateWithoutSpecial_projectsInput } from './subsidy-status-create-without-special-projects.input';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';

@InputType()
export class SubsidyStatusUpsertWithoutSpecial_projectsInput {

    @Field(() => SubsidyStatusUpdateWithoutSpecial_projectsInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutSpecial_projectsInput)
    update!: SubsidyStatusUpdateWithoutSpecial_projectsInput;

    @Field(() => SubsidyStatusCreateWithoutSpecial_projectsInput, {nullable:false})
    @Type(() => SubsidyStatusCreateWithoutSpecial_projectsInput)
    create!: SubsidyStatusCreateWithoutSpecial_projectsInput;

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;
}
