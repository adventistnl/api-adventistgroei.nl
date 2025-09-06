import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionResolverName } from './permission-resolver-name.enum';

@InputType()
export class EnumPermissionResolverNameFieldUpdateOperationsInput {

    @Field(() => PermissionResolverName, {nullable:true})
    set?: `${PermissionResolverName}`;
}
