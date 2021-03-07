const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

console.log("DB Initial Inserts")

  (async () => {
    const user1 = await prisma.user.create({
      data: {
        name: "hoge",
        email: "hoge@hoge.test"
      }
    })

    const user2 = await prisma.user.create({
      data: {
        name: "fuga",
        email: "fuga@fuga.test"
      }
    })

    const category1 = await prisma.category.create({
      data: {
        name: "Rails",
      }
    })

    await prisma.content.create({
      data: {
        title: "Rails",
        question: "Rails Question",
        answer: "Rails Answer",
        category: {
          connect: { id: category1.id }
        },
        answeredUser: { connect: { id: user1.id, } }
      }
    })

    await prisma.content.create({
      data: {
        title: "Rails2",
        question: "Rails Question2",
        answer: "Rails Answer2",
        category: {
          connect: { id: category1.id }
        },
        answeredUser: { connect: { id: user1.id, } }
      }
    })

    const category2 = await prisma.category.create({
      data: {
        name: "DB",
      }
    })

    await prisma.content.create({
      data: {
        title: "DB",
        question: "DB Question",
        answer: "DB Answer",
        category: {
          connect: { id: category2.id }
        },
        answeredUser: { connect: { id: user1.id, } }
      }
    })

    await prisma.content.create({
      data: {
        title: "DB2",
        question: "DB Question2",
        answer: "DB Answer2",
        category: {
          connect: { id: category2.id }
        },
        answeredUser: { connect: { id: user1.id, } }
      }
    })

    const category4 = await prisma.category.create({
      data: {
        name: "JavaScript",
      }
    })

    await prisma.content.create({
      data: {
        title: "JavaScript",
        question: "JavaScript Question",
        answer: "JavaScript Answer",
        category: {
          connect: { id: category4.id }
        },
        answeredUser: { connect: { id: user1.id, } }
      }
    })

    await prisma.content.create({
      data: {
        title: "JavaScript2",
        question: "JavaScript Question2",
        answer: "JavaScript Answer2",
        category: {
          connect: { id: category4.id }
        },
        answeredUser: { connect: { id: user1.id, } }
      }
    })

    prisma.$disconnect()
  })();
