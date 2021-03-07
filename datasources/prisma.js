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

  getCategories() {
    return prisma.category.findMany()
  }
}

module.exports = PrismaAPI
