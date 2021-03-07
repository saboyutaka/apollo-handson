const books = [
  {
    id: 1,
    title: 'The Awakening',
    year: 2020,
    authorId: 1,
  },
  {
    id: 2,
    title: 'City of Glass',
    year: 2019,
    authorId: 2,
  },
];

const authors = [
  {
    id: 1,
    name: "ケイト・ポインズ",
    contry: "US",
    age: 40,
  },
  {
    id: 2,
    name: "ポール・オースター",
    contry: "UK",
    age: 30,
  }
]

const resolvers = {
  Query: {
    hello: (parent, { name }, context, info) => {
      return `Hello, ${name}`
    },
    books: (parent, args, context, info) => books,
    book: (_, { id }) => {
      return books.find(book => book.id === id) || null
    },
    categories: (_, __, { dataSources }) => {
      return dataSources.prisma.getCategories();
    },

    contents: (_, __, { dataSources }) => {
      return dataSources.prisma.getContents();
    },

    users: (_, __, { dataSources }) => {
      return dataSources.prisma.getUsers();
    },
  },
  Mutation: {
    createCategory: (_, { input }, { dataSources }) => {
      return dataSources.prisma.createCategory(input);
    },
  },
  Book: {
    title: ({ title, year }) => {
      return `${title} written on ${year}`
    },
    author: ({ authorId }) => {
      return authors.find(author => author.id === authorId) || null
    },
  }
};

module.exports = resolvers
