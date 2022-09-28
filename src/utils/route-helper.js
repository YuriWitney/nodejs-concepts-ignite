const { v4: uuidv4 } = require('uuid');
const { toBrazillianStandardTime } = require('./route-util')


function createUser(body) {
  const user = body
  user.id = uuidv4()
  user.todos = []

  return user
}

function createTodo(request) {
  return {
    title: request.body.title,
    deadline: new Date(request.body.deadline),
    id: uuidv4(),
    done: false,
    created_at: toBrazillianStandardTime(new Date())
  }
}

function userNotFound(response) {
  return response
    .status(404)
    .json({ error: 'Usuário não encontrado!' })
}

function todoNotFound(response) {
  return response
    .status(404)
    .json({ error: 'todo não encontrado!' })
}

function userAlreadyExists(response) {
  return response
    .status(400)
    .json({ error: 'Usuário já existe!' })
}

function resourceCreated(response, resource) {
  return response
    .status(201)
    .json(resource)
}

function ok(response, resource) {
  return response
    .status(200)
    .json(resource)
}

function resourceDeleted(response, resource) {
  return response
    .status(204)
    .json(resource)
}

module.exports = {
  createUser,
  createTodo,
  userNotFound,
  userAlreadyExists,
  resourceCreated,
  todoNotFound,
  ok,
  resourceDeleted
}