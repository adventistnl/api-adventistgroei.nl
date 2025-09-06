import { Injectable } from '@nestjs/common';
import { MissionProjectRepository } from '../repositories/mission-project.repository';
import { MissionProject } from '../@generated/mission-project/mission-project.model';
import { MissionProjectCreateDto, MissionProjectUpdateDto } from '../dto/mission-project.dto';

@Injectable()
export class MissionProjectService {
  constructor(private readonly missionProjectRepository: MissionProjectRepository) {}

  async create(data: MissionProjectCreateDto, userId: string): Promise<MissionProject> {
    return this.missionProjectRepository.create(data, userId);
  }

  async update(id: string, data: MissionProjectUpdateDto, userId: string): Promise<MissionProject> {
    return this.missionProjectRepository.update(id, data, userId);
  }

  async delete(id: string, userId: string): Promise<MissionProject> {
    return this.missionProjectRepository.softDelete(id, userId);
  }

  async findById(id: string): Promise<MissionProject | null> {
    return this.missionProjectRepository.findById(id);
  }

  async findAll(): Promise<MissionProject[]> {
    return this.missionProjectRepository.findAll();
  }
}
