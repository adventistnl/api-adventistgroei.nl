import { registerEnumType } from '@nestjs/graphql';

export enum EventRegistrationStatus {
    paid = "paid",
    pendent = "pendent",
    reserved = "reserved",
    approved = "approved",
    canceled = "canceled"
}


registerEnumType(EventRegistrationStatus, { name: 'EventRegistrationStatus', description: undefined })
