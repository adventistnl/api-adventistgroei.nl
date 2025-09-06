import { Injectable } from '@nestjs/common';
import { SettingRepository } from '../repositories/setting.repository';
import { Setting } from '../@generated/setting/setting.model';
import { SettingCreateDto, SettingUpdateDto } from '../dto/setting.dto';

@Injectable()
export class SettingService {
  constructor(private readonly settingRepository: SettingRepository) {}

  async create(data: SettingCreateDto, userId: string): Promise<Setting> {
    return this.settingRepository.create(data, userId);
  }

  async update(id: string, data: SettingUpdateDto, userId: string): Promise<Setting> {
    return this.settingRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<Setting> {
    return this.settingRepository.softDelete(id, userId);
  }

  async findById(id: string): Promise<Setting | null> {
    return this.settingRepository.findById(id);
  }

  async findAll(): Promise<Setting[]> {
    return this.settingRepository.findAll();
  }
}
