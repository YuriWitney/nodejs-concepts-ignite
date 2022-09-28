const express = require('express');
const cors = require('cors');
const { 
  createUser, createTodo,
  userNotFound, userAlreadyExists,
  resourceCreated, ok,
  todoNotFound, resourceDeleted
} = require('../src/utils/route-helper')
const { 
  findUserByUsername, isUserFound, 
  updateTodo, setTodoDone,
  isTodoNotFound, isTodoAlreadyDone,
  findTodoIndex, isTodoIndexNotFound
} = require('../src/utils/route-util')

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

  return userNotFound(response)
}

app.post('/users', (request, response) => {
  if(isUserFound(users, request.body.username)) {
    return userAlreadyExists(response)
  }
  
  const newUser = createUser(request.body)
  users.push(newUser)
  
  return resourceCreated(response, newUser)
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  return ok(response, request.user.todos)
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  const todo = createTodo(request)

  request.user.todos.push(todo)

  return resourceCreated(response, todo)
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  const todoId = request.params.id

  let todoUpdated = updateTodo(request, todoId)
  if(isTodoNotFound(todoUpdated)) {
    return todoNotFound(response)
  }

  return ok(response, todoUpdated)
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  const todoId = request.params.id

  let todoUpdated = setTodoDone(request, todoId)
  if(isTodoNotFound(todoUpdated)) {
    return todoNotFound(response)
  }
  if(isTodoAlreadyDone(todoUpdated)) {
    return ok(response, { message: 'Todo já concluído!' })
  }

  return ok(response, todoUpdated)
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  const todoId = request.params.id
  const todoIndex = findTodoIndex(request, todoId)

  if(isTodoIndexNotFound(todoIndex)) {
    return todoNotFound(response)
  }
  const deletedTodo = request.user.todos[todoIndex]
  request.user.todos.splice(todoIndex, 1)

  return resourceDeleted(response, deletedTodo)
});

module.exports = app;