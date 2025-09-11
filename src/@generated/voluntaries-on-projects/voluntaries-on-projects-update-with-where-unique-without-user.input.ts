import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VoluntariesOnProjectsWhereUniqueInput } from './voluntaries-on-projects-where-unique.input';
import { Type } from 'class-transformer';
import { VoluntariesOnProjectsUpdateWithoutUserInput } from './voluntaries-on-projects-update-without-user.input';

@InputType()
export class VoluntariesOnProjectsUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => VoluntariesOnProjectsWhereUniqueInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsWhereUniqueInput)
    where!: Prisma.AtLeast<VoluntariesOnProjectsWhereUniqueInput, 'user_id_project_id'>;

    @Field(() => VoluntariesOnProjectsUpdateWithoutUserInput, {nullable:false})
    @Type(() => VoluntariesOnProjectsUpdateWithoutUserInput)
    data!: VoluntariesOnProjectsUpdateWithoutUserInput;
}
