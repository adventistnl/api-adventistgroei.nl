import { registerEnumType } from '@nestjs/graphql';

export enum VerificationCodeScalarFieldEnum {
    id = "id",
    email = "email",
    code = "code",
    expiresAt = "expiresAt",
    attempts = "attempts",
    createdAt = "createdAt",
    used = "used"
}


registerEnumType(VerificationCodeScalarFieldEnum, { name: 'VerificationCodeScalarFieldEnum', description: undefined })
