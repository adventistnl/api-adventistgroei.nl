import { registerEnumType } from '@nestjs/graphql';

export enum ProjectType {
    MISSION = "MISSION",
    EVANGELISM = "EVANGELISM",
    SOCIAL = "SOCIAL",
    CHURCH_PLANTING = "CHURCH_PLANTING",
    OTHER = "OTHER"
}


registerEnumType(ProjectType, { name: 'ProjectType', description: undefined })
