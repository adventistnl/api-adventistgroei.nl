import { registerEnumType } from '@nestjs/graphql';

export enum VoluntariesOnProjectsScalarFieldEnum {
    user_id = "user_id",
    project_id = "project_id"
}


registerEnumType(VoluntariesOnProjectsScalarFieldEnum, { name: 'VoluntariesOnProjectsScalarFieldEnum', description: undefined })
