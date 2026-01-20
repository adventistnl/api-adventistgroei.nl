import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpecialProjectsCreateManySubsidy_statusInput } from './special-projects-create-many-subsidy-status.input';
import { Type } from 'class-transformer';

@InputType()
export class SpecialProjectsCreateManySubsidy_statusInputEnvelope {

    @Field(() => [SpecialProjectsCreateManySubsidy_statusInput], {nullable:false})
    @Type(() => SpecialProjectsCreateManySubsidy_statusInput)
    data!: Array<SpecialProjectsCreateManySubsidy_statusInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
