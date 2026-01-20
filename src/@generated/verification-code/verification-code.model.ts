import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VerificationCode {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date;

    @Field(() => Int, {defaultValue:0,nullable:false})
    attempts!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Boolean, {defaultValue:false,nullable:false})
    used!: boolean;
}
