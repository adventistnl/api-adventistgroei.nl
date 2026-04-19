import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import { PrismaService } from '../services/prisma.service';
import { UserCreateDto, UserUpdateDto } from '../dto/user.dto';
import { PermissionModel, UserWithRoles, ValidateOutputModel } from '../models';
import { LanguagePreference } from '../@generated/prisma/language-preference.enum';
import { DepartmentRepository } from './department.repository';
import { InstitutionRepository } from './institution.repository';
import { ChurchRepository } from './church.repository';
import { ContactRepository } from './contact.repository';
import { CustomGraphQLError, ErrorCode } from '../common/errors/custom-graphql-error';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly departmentRepository: DepartmentRepository,
    private readonly institutioRepository: InstitutionRepository,
    private readonly churchRepository: ChurchRepository,
    private readonly contactRepository: ContactRepository,
    private readonly jwtService: JwtService
  ) {}

  async create(data: UserCreateDto): Promise<Omit<User, 'password'>> {
    const { contact, church_id, church_department_id, institution_id, institution_department_id, language_preference, roles, invite_token, ...rest } = data;
    rest.email = rest.email.toLowerCase();

    if (!Object.values(LanguagePreference).includes(language_preference as LanguagePreference)) {
      throw new Error('Invalid language preference');
    }
    // os métodos já estouram erros caso não encontrem
    // Verificar se a institution existe
    await this.institutioRepository.findById(institution_id);
    if (church_id) {
      // Verificar se a church existe
      await this.churchRepository.findById(church_id);
    }
    if (institution_department_id) {
      // Verificar se o department existe
      await this.departmentRepository.findById(institution_department_id);
    }
    if (church_department_id) {
      // Verificar se o department existe
      await this.departmentRepository.findById(church_department_id);
    }

    const decodedToken = this.jwtService.verify<ValidateOutputModel>(invite_token);
    const tokenExpiresAt = new Date(decodedToken.exp * 1000); // Converte Unix Timestamp para Date

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
      church: church_id ? { connect: { id: church_id } } : undefined,
      department: institution_department_id ? { connect: { id: institution_department_id } } 
        : church_department_id ? { connect: { id: church_department_id } } 
        : undefined,
      institution: { connect: { id: institution_id } },
      contact: { connect: { id: contactCreated.id } },
      password: hashedPassword,
      created_by: 'self',
      updated_by: 'self',
    };

    const createdUser = await this.prisma.user.create({ data: userData });

    // Adicionar roles ao usuário criado usando createMany
    if (roles && roles.length > 0) {
      const userRoles = roles.map(roleId => ({
        id: `${createdUser.id}_${roleId}`,
        user_id: createdUser.id,
        role_id: roleId,
        created_by: 'self',
        updated_by: 'self',
      }));

      try {
        await this.prisma.userRole.createMany({ data: userRoles, skipDuplicates: true });
      } catch (error) {
        console.error('Failed to add roles to user:', error);
      }
    }

    await this.prisma.usedInviteTokens.create({
      data: {
        token: invite_token,
        tokenExpiresAt
      }
    })

    return createdUser;
  }

  async update(user_to_update_id: string, data: UserUpdateDto, requester_id: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findUnique({ 
      where: { id: user_to_update_id },
      include: { contact: true }
    });
    if (!user) throw new Error('User not found');
    if (data.language_preference && !Object.values(LanguagePreference).includes(data.language_preference as LanguagePreference)) {
      throw new Error('Invalid language preference');
    }
    if (data.email) data.email = data.email.toLowerCase();
    const { contact_id, church_id, department_id, institution_id, phone, address, contact, ...rest } = data;

    // os métodos já estouram erros caso não encontrem
    if (institution_id) await this.institutioRepository.findById(institution_id);
    if (church_id) await this.churchRepository.findById(church_id);
    if (department_id) await this.departmentRepository.findById(department_id);
    if (contact_id) await this.contactRepository.findById(contact_id);

    const filteredData = Object.fromEntries(
      Object.entries(rest).filter(([_, value]) => value !== undefined)
    );

    // Handle contact data - merge phone and address with contact object
    const contactUpdateData = {
      ...(contact || {}),
      ...(phone !== undefined && { phone }),
      ...(address !== undefined && { address }),
    };

    let contactData;
    if (user.contact_id) {
      // User has existing contact - update it
      if (Object.keys(contactUpdateData).length > 0) {
        contactData = { 
          update: { 
            where: { id: user.contact_id },
            data: {
              ...contactUpdateData, 
              updated_by: requester_id 
            }
          }
        };
      }
    } else if (Object.keys(contactUpdateData).length > 0) {
      // User has no contact but we have contact data - create new contact
      contactData = {
        create: {
          ...contactUpdateData,
          email: data.email || user.email,
          is_primary: true,
          created_by: requester_id,
          updated_by: requester_id,
        },
      };
    }

    return await this.prisma.user.update({
      omit: { password: true },
      where: { id: user_to_update_id },
      data: {
        ...filteredData,
        language_preference: data.language_preference ? LanguagePreference[data.language_preference] : undefined,
        updated_by: requester_id,
        ...(contactData && { contact: contactData }),
        ...(church_id && { church: { connect: { id: church_id } } }),
        ...(department_id !== undefined && {
          department: department_id === ''
            ? { disconnect: true }
            : { connect: { id: department_id } }
        }),
        ...(institution_id && { institution: { connect: { id: institution_id } } }),
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

  async findByInstitution(institution_id: string): Promise<Omit<User, 'password'>[]> {
    return await this.prisma.user.findMany({
      where: {
        institution_id,
        is_deleted: false
      }
    });
  }

  async findFinanceManagersByInstitution(institutionId: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: {
        institution_id: institutionId,
        is_deleted: false,
        user_roles: {
          some: {
            is_deleted: false,
            role: { key_code: 'FINANCIAL_MANAGER' },
          },
        },
      },
    }) as unknown as User[];
  }

  async findById(id: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findUnique({
      where: { id, is_deleted: false },
    });
    if (!user) throw new CustomGraphQLError('User not found', ErrorCode.NOT_FOUND, 404);
    return user;
  }

  async findByIdWithRoles(id: string): Promise<UserWithRoles | null> {
    const user = await this.prisma.user.findUnique({
      where: { id, is_deleted: false },
      include: {
        user_roles: {
          where: { is_deleted: false, role: { is_deleted: false } },
          include: {
            role: {
              include: {
                role_permissions: {
                  where: { is_deleted: false },
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
    if (!user.user_roles || user.user_roles.length === 0) {
      // Return user even if no roles (unlike findByEmail which throws error)
      const userWithRoles: UserWithRoles = {
        ...user,
        user_roles: [],
        language_preference: user.language_preference as LanguagePreference|| LanguagePreference.en,
      };
      return userWithRoles;
    }

    const userWithRoles: UserWithRoles = {
      ...user,
      user_roles: user.user_roles.map((ur) => {
        const role = ur.role;
        const permissionsByGroup: Record<string, PermissionModel[]> = {};

        role.role_permissions.forEach((rp) => {
          const perm = rp.permission;
          const group = perm.group ? String(perm.group) : 'OUTRO';
          if (!permissionsByGroup[group]) permissionsByGroup[group] = [];
          permissionsByGroup[group].push({ ...perm, group });
        });

        return {
          id: role.id,
          name: role.name,
          description: role.description,
          key_code: role.key_code,
          is_fixed: role.is_fixed,
          permissions: Object.entries(permissionsByGroup).map(([group, data]) => ({ group, data })),
        };
      }),
      language_preference: user.language_preference as LanguagePreference || LanguagePreference.en,
    };

    return userWithRoles;
  }

  async findByEmail(email: string): Promise<UserWithRoles | null> {
    const user = await this.prisma.user.findFirst({
      where: { email, is_deleted: false },
      include: {
        user_roles: {
          where: { is_deleted: false, role: { is_deleted: false } },
          include: {
            role: {
              include: {
                role_permissions: {
                  where: { is_deleted: false },
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
    if (!user.user_roles || user.user_roles.length === 0) {
      throw new CustomGraphQLError('User has no active roles', ErrorCode.UNAUTHORIZED, 401);
    }
    const userWithRoles: UserWithRoles = {
      ...user,
      user_roles: user.user_roles.map((ur) => {
        const role = ur.role;
        const permissionsByGroup: Record<string, PermissionModel[]> = {};

        role.role_permissions.forEach((rp) => {
          const perm = rp.permission;
          const group = perm.group ? String(perm.group) : 'OUTRO';
          if (!permissionsByGroup[group]) permissionsByGroup[group] = [];
          permissionsByGroup[group].push({ ...perm, group });
        });

        return {
          id: role.id,
          name: role.name,
          description: role.description,
          key_code: role.key_code,
          is_fixed: role.is_fixed,
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

    const users = await this.prisma.user.findMany({
      where: {
        ...filters,
      },
      include: {
        contact: true,
        institution: true,
        church: true,
        department: true,
        user_roles: { include: { role: true }, where: { is_deleted: false } },
      },
    });

    return users;
  }

  async addRoleToUser(userId: string, roleId: string, requesterId: string): Promise<Omit<User, 'password'>> {
    const existingUserRole = await this.prisma.userRole.findFirst({
      where: {
        user_id: userId,
        role_id: roleId,
        is_deleted: false,
      },
    });

    if (existingUserRole) {
      throw new CustomGraphQLError('User already has this role.', ErrorCode.BAD_REQUEST, 400);
    }
    
    // Upsert userRole (cria se não existe, ou reativa se foi deletado)
    await this.prisma.userRole.upsert({
      where: { id: `${userId}_${roleId}` },
      update: { is_deleted: false, updated_by: requesterId, deleted_at: null, deleted_by: null },
      create: {
        id: `${userId}_${roleId}`,
        user_id: userId,
        role_id: roleId,
        created_by: requesterId,
        updated_by: requesterId,
      },
    });

    // Retornar usuário atualizado
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      // Isso não deve acontecer em um fluxo normal, mas é uma boa prática de segurança
      throw new CustomGraphQLError('User not found after role assignment.', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
    const { password, ...result } = user;
    return result;
  }

  async removeRoleFromUser(userId: string, roleId: string, _requesterId: string): Promise<Omit<User, 'password'>> {
    const userRole = await this.prisma.userRole.findFirst({
      where: {
        user_id: userId,
        role_id: roleId,
      },
    });

    if (!userRole) {
      throw new CustomGraphQLError('User does not have this role.', ErrorCode.BAD_REQUEST, 400);
    }

    await this.prisma.userRole.delete({
      where: {
        id: userRole.id,
      }
    });

    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new CustomGraphQLError('User not found after role removal.', ErrorCode.INTERNAL_SERVER_ERROR, 500);
    }
    const { password, ...result } = user;
    return result;
  }

  async updatePassword(userId: string, newPassword: string, updaterId: string): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new CustomGraphQLError('User not found', ErrorCode.NOT_FOUND, 404);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
        updated_by: updaterId,
      },
      omit: { password: true },
    });

    return updatedUser;
  }

  async getUsersByRoleForInstitution(institutionId: string): Promise<{ role: string; fill: string; count: number }[]> {
    // Use Prisma aggregation instead of raw SQL
    const userRoles = await this.prisma.userRole.groupBy({
      by: ['role_id'],
      where: {
        user: {
          institution_id: institutionId,
          is_deleted: false
        },
        is_deleted: false,
        role: {
          is_deleted: false
        }
      },
      _count: {
        user_id: true
      }
    });

    // Get role details for each grouped result
    const results = await Promise.all(
      userRoles.map(async (ur) => {
        const role = await this.prisma.role.findUnique({
          where: { id: ur.role_id },
          select: { name: true, color: true }
        });

        return {
          role: role?.name || 'Unknown',
          fill: role?.color || '#3b82f6',
          count: ur._count.user_id
        };
      })
    );

    return results.sort((a, b) => a.role.localeCompare(b.role));
  }

  async getMonthlyUserGrowthForInstitution(institutionId: string): Promise<number> {
    try {
      const now = new Date();
      const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

      // Count users created this month
      const currentMonthUsers = await this.prisma.user.count({
        where: {
          institution_id: institutionId,
          created_at: {
            gte: currentMonth
          },
          is_deleted: false
        }
      });

      // Count users created last month
      const lastMonthUsers = await this.prisma.user.count({
        where: {
          institution_id: institutionId,
          created_at: {
            gte: lastMonth,
            lt: currentMonth
          },
          is_deleted: false
        }
      });

      // Calculate growth percentage
      if (lastMonthUsers === 0) {
        return currentMonthUsers > 0 ? 100 : 0;
      }

      const growth = ((currentMonthUsers - lastMonthUsers) / lastMonthUsers) * 100;
      return Math.round(growth * 100) / 100; // Round to 2 decimal places
    } catch (error) {
      console.error('Error calculating monthly user growth:', error);
      return 0; // Return 0 as fallback
    }
  }

  async getChurchesByRegionForInstitution(institutionId: string): Promise<{ region: string; name: string; churches: number; color?: string; fill: string }[]> {
    try {
      // Use Prisma aggregation to count churches by region
      const churchesByRegion = await this.prisma.church.groupBy({
        by: ['region_id'],
        where: {
          institution_id: institutionId,
          is_deleted: false,
          region: {
            is_deleted: false
          }
        },
        _count: {
          id: true
        }
      });

      // Get region details for each grouped result
      const results = await Promise.all(
        churchesByRegion.map(async (cr) => {
          if (!cr.region_id) {
            // Handle churches without region
            return {
              region: 'no-region',
              name: 'Sem Região',
              churches: cr._count.id,
              color: '#6b7280',
              fill: '#6b7280'
            };
          }

          const region = await this.prisma.region.findUnique({
            where: { id: cr.region_id },
            select: { name: true, color: true }
          });

          return {
            region: cr.region_id,
            name: region?.name || 'Região Desconhecida',
            churches: cr._count.id,
            color: region?.color || '#3b82f6',
            fill: region?.color || '#3b82f6'
          };
        })
      );

      return results.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      console.error('Error getting churches by region:', error);
      return []; // Return empty array as fallback
    }
  }
}
