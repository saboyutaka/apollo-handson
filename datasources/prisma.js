const { DataSource } = require('apollo-datasource');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

class PrismaAPI extends DataSource {
  getUsers() {
    return prisma.user.findMany()
  }

  getContents() {
    return prisma.content.findMany()
  }

  createCategory(input) {
    const name = input.name
    return prisma.category.create({
      data: {
        name: name
      }
    })
  }

  getCategories() {
    return prisma.category.findMany()
  }
}

module.exports = PrismaAPI
