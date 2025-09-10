import { registerEnumType } from '@nestjs/graphql';

export enum PermissionGroup {
    USER = "USER",
    INSTITUTION = "INSTITUTION",
    CHURCH = "CHURCH",
    REGION = "REGION",
    CONTACT = "CONTACT",
    ROLE = "ROLE",
    PERMISSION = "PERMISSION",
    DEPARTMENT = "DEPARTMENT",
    COMMUNICATION = "COMMUNICATION",
    DIRECT_MESSAGE = "DIRECT_MESSAGE",
    MISSION_PROJECT = "MISSION_PROJECT",
    NOTIFICATION = "NOTIFICATION",
    SETTING = "SETTING",
    SUBSIDY_REQUEST = "SUBSIDY_REQUEST",
    SUBSIDY_STATUS = "SUBSIDY_STATUS"
}


registerEnumType(PermissionGroup, { name: 'PermissionGroup', description: undefined })
