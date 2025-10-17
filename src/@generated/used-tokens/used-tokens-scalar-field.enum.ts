import { registerEnumType } from '@nestjs/graphql';

export enum UsedTokensScalarFieldEnum {
    id = "id",
    token = "token",
    usedAt = "usedAt",
    tokenExpiresAt = "tokenExpiresAt"
}


registerEnumType(UsedTokensScalarFieldEnum, { name: 'UsedTokensScalarFieldEnum', description: undefined })
