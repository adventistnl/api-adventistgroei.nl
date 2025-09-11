import { Injectable } from '@nestjs/common';
import { ProjectVoluntaryRepository } from '../repositories/project-voluntary.repository';
import { AddProjectVoluntaryDto, RemoveProjectVoluntaryDto } from '../dto/project-voluntary.dto';
import { VoluntariesOnProjects } from '@prisma/client';

@Injectable()
export class ProjectVoluntaryService {
  constructor(private readonly projectVoluntaryRepository: ProjectVoluntaryRepository) {}

  async addVoluntary(data: AddProjectVoluntaryDto): Promise<VoluntariesOnProjects> {
    return this.projectVoluntaryRepository.addVoluntary(data);
  }

  async removeVoluntary(data: RemoveProjectVoluntaryDto): Promise<VoluntariesOnProjects> {
    return this.projectVoluntaryRepository.removeVoluntary(data);
  }
}
