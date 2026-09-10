import { registerEnumType } from '@nestjs/graphql';

export enum RecurrenceType {
    WEEKLY = "WEEKLY",
    DATE_RANGE = "DATE_RANGE"
}


registerEnumType(RecurrenceType, { name: 'RecurrenceType', description: "WEEKLY covers \"every Saturday available\" / \"never on Mondays\".\nDATE_RANGE covers everything from a single day off to a full month or year of vacation —\none flexible range instead of separate MONTHLY/YEARLY branches (simpler, same coverage)." })
