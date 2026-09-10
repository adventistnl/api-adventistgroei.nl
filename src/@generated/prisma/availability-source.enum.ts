import { registerEnumType } from '@nestjs/graphql';

export enum AvailabilitySource {
    MANUAL = "MANUAL",
    RECURRENCE_RULE = "RECURRENCE_RULE"
}


registerEnumType(AvailabilitySource, { name: 'AvailabilitySource', description: "MANUAL = the preacher (or an admin) set this exact date directly, always wins.\nRECURRENCE_RULE = materialized from an AvailabilityRecurrenceRule; overwritten when the\nrule regenerates, unless a later MANUAL edit on the same date takes precedence." })
