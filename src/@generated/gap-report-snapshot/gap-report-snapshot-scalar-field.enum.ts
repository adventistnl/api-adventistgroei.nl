import { registerEnumType } from '@nestjs/graphql';

export enum GapReportSnapshotScalarFieldEnum {
    id = "id",
    institution_id = "institution_id",
    month = "month",
    churches_without_preacher = "churches_without_preacher",
    preachers_without_assignment = "preachers_without_assignment",
    computed_at = "computed_at"
}


registerEnumType(GapReportSnapshotScalarFieldEnum, { name: 'GapReportSnapshotScalarFieldEnum', description: undefined })
