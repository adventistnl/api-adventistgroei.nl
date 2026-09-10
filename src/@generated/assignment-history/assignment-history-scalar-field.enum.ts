import { registerEnumType } from '@nestjs/graphql';

export enum AssignmentHistoryScalarFieldEnum {
    id = "id",
    assignment_id = "assignment_id",
    field_name = "field_name",
    old_value = "old_value",
    new_value = "new_value",
    changed_by = "changed_by",
    changed_at = "changed_at"
}


registerEnumType(AssignmentHistoryScalarFieldEnum, { name: 'AssignmentHistoryScalarFieldEnum', description: undefined })
