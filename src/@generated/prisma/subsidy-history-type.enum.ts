import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyHistoryType {
    STATUS_CHANGE = "STATUS_CHANGE",
    PRIORITY_CHANGE = "PRIORITY_CHANGE",
    COMMENT = "COMMENT",
    DOCUMENT_ACTION = "DOCUMENT_ACTION"
}


registerEnumType(SubsidyHistoryType, { name: 'SubsidyHistoryType', description: undefined })
