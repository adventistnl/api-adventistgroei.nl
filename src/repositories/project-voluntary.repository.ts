import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { AddProjectVoluntaryDto, RemoveProjectVoluntaryDto } from '../dto/project-voluntary.dto';
import { VoluntariesOnProjects } from '@prisma/client';

@Injectable()
export class ProjectVoluntaryRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addVoluntary(data: AddProjectVoluntaryDto): Promise<VoluntariesOnProjects> {
    return await this.prisma.voluntariesOnProjects.create({
      data: {
        project_id: data.project_id,
        user_id: data.user_id,
      },
    });
  }

  async removeVoluntary(data: RemoveProjectVoluntaryDto): Promise<VoluntariesOnProjects> {
    return await this.prisma.voluntariesOnProjects.delete({
      where: {
        user_id_project_id: {
          user_id: data.user_id,
          project_id: data.project_id,
        },
      },
    });
  }
}
