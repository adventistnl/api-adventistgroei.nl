import { registerEnumType } from '@nestjs/graphql';

export enum PermissionGroup {
    USER = "USER",
    INSTITUTION = "INSTITUTION",
    CHURCH = "CHURCH",
    REGION = "REGION",
    CONTACT = "CONTACT",
    ROLE = "ROLE",
    PERMISSION = "PERMISSION"
}


registerEnumType(PermissionGroup, { name: 'PermissionGroup', description: undefined })
