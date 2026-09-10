import { registerEnumType } from '@nestjs/graphql';

export enum RequestStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    DECLINED = "DECLINED",
    WITHDRAWN = "WITHDRAWN",
    SUPERSEDED = "SUPERSEDED"
}


registerEnumType(RequestStatus, { name: 'RequestStatus', description: undefined })
