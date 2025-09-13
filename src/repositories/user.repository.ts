import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';
import { UserWithRoles } from 'src/models';
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';
import { DepartmentRepository } from './department.repository';
import { InstitutionRepository } from './institution.repository';
import { ChurchRepository } from './church.repository';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly departmentRepository: DepartmentRepository,
    private readonly institutioRepository: InstitutionRepository,
    private readonly churchRepository: ChurchRepository,
    
  ) {}

  async create(data: UserCreateDto): Promise<User> {
    const { contact, church_id, department_id, institution_id, ...rest } = data;

    // os métodos já estouram erros caso não encontrem
    // Verificar se a institution existe
    await this.institutioRepository.findById(institution_id);
    // Verificar se a church existe
    await this.churchRepository.findById(church_id);
    // Verificar se o department existe
    await this.departmentRepository.findById(department_id);
    
    const contactCreated = await this.prisma.contact.create({
      data: {
        ...contact,
        email: rest.email,
        is_primary: true,
        created_by: 'self',
        updated_by: 'self',
      },
    });
    
    // Hash da senha antes de salvar
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const userData = {
      ...rest,
      church: { connect: { id: church_id } },
      department: { connect: { id: department_id } },
      institution: { connect: { id: institution_id } },
      contact: { connect: { id: contactCreated.id } },
      password: hashedPassword,
      created_by: 'self',
      updated_by: 'self',
    };
    return await this.prisma.user.create({ data: userData });
  }

  async update(data: UserUpdateDto, userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id: data.id } });
    if (!user) throw new Error('User not found');
    const contactId = user.contact_id;
    if (data.contact && contactId) {
      await this.prisma.contact.update({
        where: { id: contactId },
        data: {
          ...data.contact,
          updated_by: userId,
        },
      });
    }
    return await this.prisma.user.update({
      where: { id: data.id },
      data: {
        institution_id: data.institution_id,
        church_id: data.church_id ? data.church_id : '',
        name: data.name,
        email: data.email,
        password: data.password,
        language_preference: data.language_preference,
        contact_id: contactId,
        updated_by: userId,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<User> {
    return await this.prisma.user.update({
      where: { id },
      data: {
        is_deleted: true,
        deleted_at: new Date(),
        deleted_by: userId,
        updated_by: userId,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({ where: { is_deleted: false } });
  }

  async findById(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id, is_deleted: false },
    });
  }

  async findByEmail(email: string): Promise<UserWithRoles | null> {
    const user = await this.prisma.user.findFirst({
      where: { email, is_deleted: false },
      include: {
        user_roles: {
          include: {
            role: {
              include: {
                role_permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    if (!user) return null;
    // Tipar corretamente os objetos
    const userWithRoles: UserWithRoles = {
      ...user,
      user_roles: user.user_roles.map((ur): import('src/models/role.model').RoleModel => {
        const role = ur.role;
        // Agrupar permissões por grupo
        const permissionsByGroup: { [group: string]: import('src/models/permission.model').PermissionModel[] } = {};
        for (const rp of role.role_permissions) {
          const perm = rp.permission;
          // Converter group para string, nunca null
          const group = perm.group ? String(perm.group) : 'OUTRO';
          if (!permissionsByGroup[group]) permissionsByGroup[group] = [];
          permissionsByGroup[group].push({ ...perm, group });
        }
        return {
          id: role.id,
          name: role.name,
          description: role.description,
          key_code: role.key_code,
          permissions: Object.entries(permissionsByGroup).map(([group, data]) => ({ group, data })),
        };
      }),
      language_preference: LanguagePreference.en, // Ajustar para o enum correto
    };
    return userWithRoles;
  }

  async findOneByFilters(filters: Partial<Record<keyof User, any>>): Promise<User | null> {
    const allowedKeys: (keyof User)[] = ['institution_id', 'email', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof User)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.user.findFirst({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }

  async findManyByFilters(filters: Partial<Record<keyof User, any>>): Promise<User[]> {
    const allowedKeys: (keyof User)[] = ['institution_id', 'email', 'name', 'is_deleted'];

    for (const key of Object.keys(filters)) {
      if (!allowedKeys.includes(key as keyof User)) {
        throw new Error(`Invalid filter key: ${key}`);
      }
    }

    return this.prisma.user.findMany({
      where: {
        is_deleted: false,
        ...filters,
      },
    });
  }
}
