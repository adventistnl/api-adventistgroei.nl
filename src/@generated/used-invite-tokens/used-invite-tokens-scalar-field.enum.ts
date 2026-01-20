import { registerEnumType } from '@nestjs/graphql';

export enum UsedInviteTokensScalarFieldEnum {
    id = "id",
    token = "token",
    usedAt = "usedAt",
    tokenExpiresAt = "tokenExpiresAt"
}


registerEnumType(UsedInviteTokensScalarFieldEnum, { name: 'UsedInviteTokensScalarFieldEnum', description: undefined })
