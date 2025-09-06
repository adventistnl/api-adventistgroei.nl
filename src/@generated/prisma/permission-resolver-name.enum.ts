import { registerEnumType } from '@nestjs/graphql';

export enum PermissionResolverName {
    users = "users",
    user = "user",
    createUser = "createUser",
    updateUser = "updateUser",
    deleteUser = "deleteUser",
    createInstitution = "createInstitution",
    institutions = "institutions",
    institution = "institution",
    updateInstitution = "updateInstitution",
    deleteInstitution = "deleteInstitution",
    regions = "regions",
    region = "region",
    createRegion = "createRegion",
    updateRegion = "updateRegion",
    deleteRegion = "deleteRegion",
    churches = "churches",
    church = "church",
    createChurch = "createChurch",
    updateChurch = "updateChurch",
    deleteChurch = "deleteChurch",
    permissions = "permissions",
    createRole = "createRole",
    updateRole = "updateRole",
    deleteRole = "deleteRole",
    roles = "roles",
    role = "role"
}


registerEnumType(PermissionResolverName, { name: 'PermissionResolverName', description: undefined })
