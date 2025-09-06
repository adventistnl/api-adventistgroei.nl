import { registerEnumType } from '@nestjs/graphql';

export enum AnnualReportScalarFieldEnum {
    id = "id",
    department_id = "department_id",
    text = "text",
    file_path = "file_path",
    submission_date = "submission_date",
    created_at = "created_at",
    updated_at = "updated_at",
    created_by = "created_by",
    updated_by = "updated_by",
    is_deleted = "is_deleted",
    deleted_at = "deleted_at",
    deleted_by = "deleted_by"
}


registerEnumType(AnnualReportScalarFieldEnum, { name: 'AnnualReportScalarFieldEnum', description: undefined })
