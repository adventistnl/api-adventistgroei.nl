import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const users = await prisma.user.findMany({
    where: {
      user_roles: {
        some: {
          role: { key_code: { in: ['INSTITUTIONAL_LEADER', 'INSTITUTION_MANAGER'] } }
        }
      }
    }
  });
  console.log(users.length, "users found");
}
main();
