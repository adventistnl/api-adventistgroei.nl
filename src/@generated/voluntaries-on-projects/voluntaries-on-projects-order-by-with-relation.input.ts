import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { ProjectOrderByWithRelationInput } from '../project/project-order-by-with-relation.input';

@InputType()
export class VoluntariesOnProjectsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    user_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    project_id?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => ProjectOrderByWithRelationInput, {nullable:true})
    @Type(() => ProjectOrderByWithRelationInput)
    project?: ProjectOrderByWithRelationInput;
}
