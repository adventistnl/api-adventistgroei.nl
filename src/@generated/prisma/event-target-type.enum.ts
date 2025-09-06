import { registerEnumType } from '@nestjs/graphql';

export enum EventTargetType {
    institution = "institution",
    region = "region",
    department = "department",
    church = "church",
    user = "user"
}


registerEnumType(EventTargetType, { name: 'EventTargetType', description: undefined })
