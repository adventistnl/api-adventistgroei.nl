import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommunicationCreateManyInstitutionInput } from './communication-create-many-institution.input';
import { Type } from 'class-transformer';

@InputType()
export class CommunicationCreateManyInstitutionInputEnvelope {

    @Field(() => [CommunicationCreateManyInstitutionInput], {nullable:false})
    @Type(() => CommunicationCreateManyInstitutionInput)
    data!: Array<CommunicationCreateManyInstitutionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
