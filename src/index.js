const express = require('express');
const cors = require('cors');
const createUser = require('../src/utils/route-helper')
const isNewUserAlreadyExists = require('../src/utils/route-util')

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
}

app.post('/users', (request, response) => {
  if(isNewUserAlreadyExists(users, request.body.username)) {
    response.status(400).send({ error: 'Usuário já existe!' })
    return
  }
  
  const newUser = createUser(request.body)

  users.push(newUser)
  response
    .status(201)
    .send(newUser)
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;