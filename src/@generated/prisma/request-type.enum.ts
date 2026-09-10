import { registerEnumType } from '@nestjs/graphql';

export enum RequestType {
    PREACHER_REQUESTED = "PREACHER_REQUESTED",
    CHURCH_INVITED = "CHURCH_INVITED"
}


registerEnumType(RequestType, { name: 'RequestType', description: undefined })
