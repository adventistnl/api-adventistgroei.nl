import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { SettingService } from '../services/setting.service';
import { Setting } from '../@generated/setting/setting.model';
import { SettingCreateDto, SettingUpdateDto } from '../dto/setting.dto';

@Resolver(() => Setting)
export class SettingResolver {
  constructor(private readonly settingService: SettingService) {}

  @Query(() => [Setting])
  async settings(): Promise<Setting[]> {
    return this.settingService.findAll();
  }

  @Query(() => Setting, { nullable: true })
  async setting(@Args('id') id: string): Promise<Setting | null> {
    return this.settingService.findById(id);
  }

  @Mutation(() => Setting)
  async createSetting(
    @Args('data') data: SettingCreateDto,
    @Context() context: { userId: string },
  ): Promise<Setting> {
    return this.settingService.create(data, context.userId);
  }

  @Mutation(() => Setting)
  async updateSetting(
    @Args('id') id: string,
    @Args('data') data: SettingUpdateDto,
    @Context() context: { userId: string },
  ): Promise<Setting> {
    return this.settingService.update(id, data, context.userId);
  }

  @Mutation(() => Setting)
  async deleteSetting(
    @Args('id') id: string,
    @Context() context: { userId: string },
  ): Promise<Setting> {
    return this.settingService.delete(id, context.userId);
  }
}
