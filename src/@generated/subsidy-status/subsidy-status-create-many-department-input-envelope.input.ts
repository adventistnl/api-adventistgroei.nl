import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyStatusCreateManyDepartmentInput } from './subsidy-status-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyStatusCreateManyDepartmentInputEnvelope {

    @Field(() => [SubsidyStatusCreateManyDepartmentInput], {nullable:false})
    @Type(() => SubsidyStatusCreateManyDepartmentInput)
    data!: Array<SubsidyStatusCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
