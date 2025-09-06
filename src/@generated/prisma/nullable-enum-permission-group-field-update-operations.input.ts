import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionGroup } from './permission-group.enum';

@InputType()
export class NullableEnumPermissionGroupFieldUpdateOperationsInput {

    @Field(() => PermissionGroup, {nullable:true})
    set?: `${PermissionGroup}`;
}
