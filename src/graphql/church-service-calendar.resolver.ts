import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { ChurchServiceCalendarService } from '../services/church-service-calendar.service';
import { ChurchServiceCalendar } from '../@generated/church-service-calendar/church-service-calendar.model';
import { SetServiceCalendarInput, SetServiceCalendarBulkInput } from '../dto/church-service-calendar.dto';
import { Permission } from '../middlewares/permissions.decorator';
import { PermissionsGuard } from '../middlewares/permissions.guard';

@Resolver(() => ChurchServiceCalendar)
@UseGuards(PermissionsGuard)
export class ChurchServiceCalendarResolver {
  constructor(private readonly service: ChurchServiceCalendarService) {}

  @Permission()
  @Query(() => [ChurchServiceCalendar])
  async churchServiceCalendar(
    @Args('church_id') churchId: string,
    @Args('month') month: string,
  ): Promise<ChurchServiceCalendar[]> {
    return this.service.churchServiceCalendar(churchId, month);
  }

  @Permission()
  @Mutation(() => [ChurchServiceCalendar])
  async setChurchServiceCalendar(
    @Args('input') input: SetServiceCalendarInput,
    @Context() context: { userId: string },
  ): Promise<ChurchServiceCalendar[]> {
    return this.service.setChurchServiceCalendar(input, context.userId);
  }

  @Permission()
  @Mutation(() => [ChurchServiceCalendar])
  async setChurchServiceCalendarBulk(
    @Args('input') input: SetServiceCalendarBulkInput,
    @Context() context: { userId: string },
  ): Promise<ChurchServiceCalendar[]> {
    return this.service.setChurchServiceCalendarBulk(input, context.userId);
  }
}
