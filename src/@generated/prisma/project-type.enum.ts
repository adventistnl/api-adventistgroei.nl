import { registerEnumType } from '@nestjs/graphql';

export enum ProjectType {
    MISSION = "MISSION",
    EVANGELISM = "EVANGELISM",
    SOCIAL = "SOCIAL",
    OTHER = "OTHER"
}


registerEnumType(ProjectType, { name: 'ProjectType', description: undefined })
