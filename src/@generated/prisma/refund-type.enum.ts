import { registerEnumType } from '@nestjs/graphql';

export enum RefundType {
    TOTAL = "TOTAL",
    PARTIAL = "PARTIAL"
}


registerEnumType(RefundType, { name: 'RefundType', description: undefined })
