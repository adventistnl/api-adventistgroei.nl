import { registerEnumType } from '@nestjs/graphql';

export enum TransferType {
    INITIAL_FUNDING = "INITIAL_FUNDING",
    DISTRIBUTION = "DISTRIBUTION",
    REALLOCATION = "REALLOCATION",
    REDUCTION = "REDUCTION"
}


registerEnumType(TransferType, { name: 'TransferType', description: undefined })
