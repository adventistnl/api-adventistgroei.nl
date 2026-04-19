import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyRequestType {
    ADVANCE = "ADVANCE",
    WITHOUT_DOCUMENT = "WITHOUT_DOCUMENT",
    WITH_DOCUMENT = "WITH_DOCUMENT"
}


registerEnumType(SubsidyRequestType, { name: 'SubsidyRequestType', description: undefined })
