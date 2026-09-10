import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PreacherRegionAccessWhereInput } from './preacher-region-access-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyPreacherRegionAccessArgs {

    @Field(() => PreacherRegionAccessWhereInput, {nullable:true})
    @Type(() => PreacherRegionAccessWhereInput)
    where?: PreacherRegionAccessWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
