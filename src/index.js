const express = require('express');
const cors = require('cors');
const { createUser, createTodo } = require('../src/utils/route-helper')
const { v4: uuidv4 } = require('uuid');
const { findUserByUsername, isUserFound } = require('../src/utils/route-util')

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  if(isUserFound(users, request.headers.username)) {
    const user = findUserByUsername(users, request.headers.username)
    request.user = user
    return next()
  }

  return response
    .status(404)
    .json({ error: 'Usuário não encontrado!' })
}

app.post('/users', (request, response) => {
  if(isUserFound(users, request.body.username)) {
    return response
      .status(400)
      .json({ error: 'Usuário já existe!' })
  }
  
  const newUser = createUser(request.body)
  users.push(newUser)
  
  return response
    .status(201)
    .json(newUser)
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  return response
    .status(200)
    .json(request.user.todos)
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const todo = createTodo(request)
  
  request.user.todos.push(todo)

  return response
    .status(201)
    .json(todo)
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