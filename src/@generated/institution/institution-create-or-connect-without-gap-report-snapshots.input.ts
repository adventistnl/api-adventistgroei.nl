import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';
import { Type } from 'class-transformer';
import { InstitutionCreateWithoutGap_report_snapshotsInput } from './institution-create-without-gap-report-snapshots.input';

@InputType()
export class InstitutionCreateOrConnectWithoutGap_report_snapshotsInput {

    @Field(() => InstitutionWhereUniqueInput, {nullable:false})
    @Type(() => InstitutionWhereUniqueInput)
    where!: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;

    @Field(() => InstitutionCreateWithoutGap_report_snapshotsInput, {nullable:false})
    @Type(() => InstitutionCreateWithoutGap_report_snapshotsInput)
    create!: InstitutionCreateWithoutGap_report_snapshotsInput;
}
