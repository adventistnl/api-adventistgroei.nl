import { ObjectType, Field, Float, Int } from '@nestjs/graphql';

@ObjectType()
export class SubsidyKPIs {
  @Field(() => Int)
  totalRequests: number;

  @Field(() => Int)
  pendingRequests: number;

  @Field(() => Int)
  inReviewRequests: number;

  @Field(() => Int)
  approvedRequests: number;

  @Field(() => Int)
  rejectedRequests: number;

  @Field(() => Float)
  totalRequested: number;

  @Field(() => Float)
  totalApproved: number;

  @Field(() => Int)
  approvalRate: number;
}

@ObjectType()
export class SubsidyByDepartment {
  @Field()
  month: string;

  @Field()
  department: string;

  @Field(() => Float)
  amount: number;
}

@ObjectType()
export class SubsidyByMonth {
  @Field()
  month: string;

  @Field(() => Int)
  approved: number;

  @Field(() => Int)
  pending: number;

  @Field(() => Int)
  rejected: number;

  @Field(() => Int)
  quarter: number;
}

@ObjectType()
export class SubsidyByStatus {
  @Field()
  status: string;

  @Field(() => Int)
  count: number;

  @Field()
  fill: string;
}
