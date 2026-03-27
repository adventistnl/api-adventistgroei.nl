import { registerEnumType } from '@nestjs/graphql';

export enum AdjustmentTaskScalarFieldEnum {
    id = "id",
    adjustment_id = "adjustment_id",
    title = "title",
    completed = "completed",
    position = "position",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(AdjustmentTaskScalarFieldEnum, { name: 'AdjustmentTaskScalarFieldEnum', description: undefined })
