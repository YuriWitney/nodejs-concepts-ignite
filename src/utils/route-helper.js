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

module.exports = {
  createUser,
  createTodo
}