const { v4: uuidv4 } = require('uuid');

function createUser(body) {
  const user = body
  user.id = uuidv4()
  user.todos = []

  return user
}

module.exports = createUser