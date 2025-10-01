import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusWhereInput } from './subsidy-status-where.input';
import { Type } from 'class-transformer';
import { SubsidyStatusUpdateWithoutSpecial_projectsInput } from './subsidy-status-update-without-special-projects.input';

@InputType()
export class SubsidyStatusUpdateToOneWithWhereWithoutSpecial_projectsInput {

    @Field(() => SubsidyStatusWhereInput, {nullable:true})
    @Type(() => SubsidyStatusWhereInput)
    where?: SubsidyStatusWhereInput;

    @Field(() => SubsidyStatusUpdateWithoutSpecial_projectsInput, {nullable:false})
    @Type(() => SubsidyStatusUpdateWithoutSpecial_projectsInput)
    data!: SubsidyStatusUpdateWithoutSpecial_projectsInput;
}
