import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateExistingProjects() {
  try {
    const result = await prisma.project.updateMany({
      data: {
        subsidized_budget: 0,
        balance: 0,
      },
    })

    console.log(`✅ Updated ${result.count} projects with default values for subsidized_budget and balance`)
  } catch (error) {
    console.error('❌ Error updating projects:', error)
  } finally {
    await prisma.$disconnect()
  }
}

updateExistingProjects()
