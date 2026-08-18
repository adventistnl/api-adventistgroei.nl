import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChurchGapEntry {
  @Field()
  churchId!: string;

  @Field()
  churchName!: string;

  @Field(() => Date)
  date!: Date;
}

@ObjectType()
export class PreacherGapEntry {
  @Field()
  userId!: string;

  @Field()
  userName!: string;

  @Field(() => Date)
  date!: Date;
}

/** R9 — read-only view of the latest daily-computed GapReportSnapshot for a month. */
@ObjectType()
export class GapReport {
  @Field()
  month!: string;

  @Field(() => [ChurchGapEntry])
  churchesWithoutPreacher!: ChurchGapEntry[];

  @Field(() => [PreacherGapEntry])
  preachersWithoutAssignment!: PreacherGapEntry[];

  @Field(() => Date)
  computedAt!: Date;
}
