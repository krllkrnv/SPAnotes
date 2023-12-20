import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import {addMocksToSchema} from '@graphql-tools/mock';
import {makeExecutableSchema} from '@graphql-tools/schema';
import casual from 'casual';
// Наш запрос с graphql сервера
// Добавлено поле id
const typeDefs = `
type Query {
tasks: [Task!]!
}

type Task {
name: String!
subtasks: [Subtask!]!
id: Float!
}

type Subtask {
name: String!
status: Boolean!
id: Float!
}
`;

// Библиотека casual позволяет давать рандомные строки и числа.
// Количество subtasks рандомно в указанном диапазоне.
const mocks = {
  Task: () => ({
    name: casual.word,
    subtasks: Array.from({length: casual.integer(1, 5)}, () => ({
      name: casual.word,
      // id здесь и ниже - рандомно генерируемое значение
      id: Math.random(),
      status: casual.boolean,
    })),
  }),
  Subtask: () => ({
    name: casual.word,
    id: Math.random(),
    status: casual.boolean,
  }),
};
// Наш сервер, откуда мы берем данные
const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({typeDefs}),
    mocks,
    preserveResolvers: true,
  }),
});

const {url} = await startStandaloneServer(server, {listen: {port: 4000}});
