import { registerEnumType } from '@nestjs/graphql';

export enum EventType {
    show = "show",
    evangelism = "evangelism"
}


registerEnumType(EventType, { name: 'EventType', description: undefined })
