import { registerEnumType } from '@nestjs/graphql';

export enum AvailabilityHistoryScalarFieldEnum {
    id = "id",
    availability_id = "availability_id",
    field_name = "field_name",
    old_value = "old_value",
    new_value = "new_value",
    changed_by = "changed_by",
    changed_at = "changed_at"
}


registerEnumType(AvailabilityHistoryScalarFieldEnum, { name: 'AvailabilityHistoryScalarFieldEnum', description: undefined })
