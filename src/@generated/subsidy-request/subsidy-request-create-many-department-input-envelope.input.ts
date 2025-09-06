import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubsidyRequestCreateManyDepartmentInput } from './subsidy-request-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class SubsidyRequestCreateManyDepartmentInputEnvelope {

    @Field(() => [SubsidyRequestCreateManyDepartmentInput], {nullable:false})
    @Type(() => SubsidyRequestCreateManyDepartmentInput)
    data!: Array<SubsidyRequestCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
