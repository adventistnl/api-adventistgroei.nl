import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateManyChurchInput } from './department-create-many-church.input';
import { Type } from 'class-transformer';

@InputType()
export class DepartmentCreateManyChurchInputEnvelope {

    @Field(() => [DepartmentCreateManyChurchInput], {nullable:false})
    @Type(() => DepartmentCreateManyChurchInput)
    data!: Array<DepartmentCreateManyChurchInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
