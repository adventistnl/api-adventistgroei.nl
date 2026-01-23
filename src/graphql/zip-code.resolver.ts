import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ZipCodeService } from '../services/zip-code.service';
import { ZipInfo } from '../models/zip-info.model';

@Resolver(() => ZipInfo)
export class ZipCodeResolver {
  constructor(private readonly zipCodeService: ZipCodeService) {}

  @Query(() => ZipInfo, {
    name: 'getZipInfo',
    description: 'Get city and province information for a Dutch postal code (ZIP code) and house number',
  })
  async getZipInfo(
    @Args('zip', { type: () => String, description: 'Dutch postal code (format: 1234AB)' }) zip: string,
    @Args('houseNumber', { type: () => Int, description: 'House number' }) houseNumber: number,
  ): Promise<ZipInfo> {
    return this.zipCodeService.getZipInfo(zip, houseNumber);
  }
}
