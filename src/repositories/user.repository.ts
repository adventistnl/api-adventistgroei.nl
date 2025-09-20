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
import { ContactRepository } from './contact.repository';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly departmentRepository: DepartmentRepository,
    private readonly institutioRepository: InstitutionRepository,
    private readonly churchRepository: ChurchRepository,
    private readonly contactRepository: ContactRepository
    
  ) {}

  async create(data: UserCreateDto): Promise<Omit<User, 'password'>> {
    const { contact, church_id, department_id, institution_id, language_preference, ...rest } = data;

    if (!Object.values(LanguagePreference).includes(language_preference as LanguagePreference)) {
      throw new Error('Invalid language preference');
    }
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
      language_preference: LanguagePreference[language_preference],
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

  async update(user_to_update_id: string, data: UserUpdateDto, requester_id: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findUnique({ where: { id: user_to_update_id } });
    if (!user) throw new Error('User not found');

    const { contact_id, church_id, department_id, institution_id, ...rest } = data;

    // os métodos já estouram erros caso não encontrem
    if (institution_id) await this.institutioRepository.findById(institution_id);
    if (church_id) await this.churchRepository.findById(church_id);
    if (department_id) await this.departmentRepository.findById(department_id);
    if (contact_id) await this.contactRepository.findById(contact_id);

    const filteredData = Object.fromEntries(
      Object.entries(rest).filter(([_, value]) => value !== undefined)
    );

    const contactData = contact_id && data.contact
      ? { connect: { id: contact_id }, update: { ...data.contact, updated_by: requester_id } }
      : contact_id
      ? { connect: { id: contact_id } }
      : data.contact
      ? {
          upsert: {
            create: { ...data.contact, is_primary: true, created_by: requester_id, updated_by: requester_id },
            update: { ...data.contact, updated_by: requester_id },
          },
        }
      : undefined;

    return await this.prisma.user.update({
      omit: { password: true },
      where: { id: user_to_update_id },
      data: {
        ...filteredData,
        updated_by: requester_id,
        contact: contactData,
      },
    });
  }

  async softDelete(id: string, userId: string): Promise<Omit<User, 'password'>> {
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

  async findAll(): Promise<Omit<User, 'password'>[]> {
    return await this.prisma.user.findMany({ where: { is_deleted: false } });
  }

  async findById(id: string): Promise<Omit<User, 'password'> | null> {
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
