import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DepartmentCreateManyContactInput } from './department-create-many-contact.input';
import { Type } from 'class-transformer';

@InputType()
export class DepartmentCreateManyContactInputEnvelope {

    @Field(() => [DepartmentCreateManyContactInput], {nullable:false})
    @Type(() => DepartmentCreateManyContactInput)
    data!: Array<DepartmentCreateManyContactInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
