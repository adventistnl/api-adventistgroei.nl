import { registerEnumType } from '@nestjs/graphql';

export enum ProjectType {
    Local = "Local",
    Global = "Global"
}


registerEnumType(ProjectType, { name: 'ProjectType', description: undefined })
