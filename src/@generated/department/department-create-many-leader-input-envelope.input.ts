import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateManyLeaderInput } from './department-create-many-leader.input';
import { Type } from 'class-transformer';

@InputType()
export class DepartmentCreateManyLeaderInputEnvelope {

    @Field(() => [DepartmentCreateManyLeaderInput], {nullable:false})
    @Type(() => DepartmentCreateManyLeaderInput)
    data!: Array<DepartmentCreateManyLeaderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
