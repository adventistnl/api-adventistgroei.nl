import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DirectMessageCreateManyInstitutionInput } from './direct-message-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class DirectMessageCreateManyInstitutionInputEnvelope {

    @Field(() => [DirectMessageCreateManyInstitutionInput], {nullable:false})
    @Type(() => DirectMessageCreateManyInstitutionInput)
    data!: Array<DirectMessageCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
