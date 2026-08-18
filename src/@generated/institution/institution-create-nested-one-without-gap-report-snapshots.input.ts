import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstitutionCreateWithoutGap_report_snapshotsInput } from './institution-create-without-gap-report-snapshots.input';
import { Type } from 'class-transformer';
import { InstitutionCreateOrConnectWithoutGap_report_snapshotsInput } from './institution-create-or-connect-without-gap-report-snapshots.input';
import { Prisma } from '@prisma/client';
import { InstitutionWhereUniqueInput } from './institution-where-unique.input';

@InputType()
export class InstitutionCreateNestedOneWithoutGap_report_snapshotsInput {

    @Field(() => InstitutionCreateWithoutGap_report_snapshotsInput, {nullable:true})
    @Type(() => InstitutionCreateWithoutGap_report_snapshotsInput)
    create?: InstitutionCreateWithoutGap_report_snapshotsInput;

    @Field(() => InstitutionCreateOrConnectWithoutGap_report_snapshotsInput, {nullable:true})
    @Type(() => InstitutionCreateOrConnectWithoutGap_report_snapshotsInput)
    connectOrCreate?: InstitutionCreateOrConnectWithoutGap_report_snapshotsInput;

    @Field(() => InstitutionWhereUniqueInput, {nullable:true})
    @Type(() => InstitutionWhereUniqueInput)
    connect?: Prisma.AtLeast<InstitutionWhereUniqueInput, 'id' | 'contact_id'>;
}
