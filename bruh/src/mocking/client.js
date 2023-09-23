import axios from 'axios';

const graphqlUrl = 'http://localhost:4000/';
const query = `
  {
    tasks {
      name
      subtasks {
        name
        status
      }
    }
  }
`;

axios.post(graphqlUrl, { query })
  .then(response => {
    let data = response.data.data;
    console.log(data.tasks);
  })
  .catch(error => {
    console.error('Ошибка при запросе к серверу GraphQL:', error);
  });
