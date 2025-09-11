import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsUpdateWithoutUserInput } from './voluntaries-on-projects-update-without-user.input';
import { VoluntariesOnProjectsCreateWithoutUserInput } from './voluntaries-on-projects-create-without-user.input';

@InputType()
export class VoluntariesOnProjectsUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => VoluntariesOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>;

    @Field(() => VoluntariesOnProjectsUpdateWithoutUserInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUpdateWithoutUserInput)
    update!: VoluntariesOnProjectsUpdateWithoutUserInput;

    @Field(() => VoluntariesOnProjectsCreateWithoutUserInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsCreateWithoutUserInput)
    create!: VoluntariesOnProjectsCreateWithoutUserInput;
}
