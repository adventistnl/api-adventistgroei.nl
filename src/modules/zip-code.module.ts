import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ZipCodeService } from '../services/zip-code.service';
import { ZipCodeResolver } from '../graphql/zip-code.resolver';

@Module({
  imports: [ConfigModule],
  providers: [ZipCodeService, ZipCodeResolver],
  exports: [ZipCodeService],
})
export class ZipCodeModule {}
