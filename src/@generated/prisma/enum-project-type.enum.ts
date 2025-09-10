import { registerEnumType } from '@nestjs/graphql';

export enum EnumProjectType {
    MISSION = "MISSION",
    EVANGELISM = "EVANGELISM",
    SOCIAL = "SOCIAL",
    OTHER = "OTHER"
}


registerEnumType(EnumProjectType, { name: 'EnumProjectType', description: undefined })
