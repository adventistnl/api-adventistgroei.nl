import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Institution } from '../institution/institution.model';

/**
 * R9 — computed by a daily cron job (never at request time), one row per institution+month.
 * Query.gapReport only ever reads the latest snapshot.
 */
@ObjectType({description:'R9 — computed by a daily cron job (never at request time), one row per institution+month.\nQuery.gapReport only ever reads the latest snapshot.'})
export class GapReportSnapshot {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    institution_id!: string;

    @Field(() => String, {nullable:false})
    month!: string;

    @Field(() => GraphQLJSON, {nullable:false})
    churches_without_preacher!: any;

    @Field(() => GraphQLJSON, {nullable:false})
    preachers_without_assignment!: any;

    @Field(() => Date, {nullable:false})
    computed_at!: Date;

    @Field(() => Institution, {nullable:false})
    institution?: Institution;
}
