function findUserByUsername(usersArray, username) {
  const result = usersArray.filter( user =>
    user.username === username
  )

  return result[0]
}

function isUserFound(users, username) {
  const user = findUserByUsername(users, username)
  return user !== undefined
}

function setGMT(date) {
  return date.setHours( date.getHours() -3)
}

function toBrazillianStandardTime(date) {
  return new Date(setGMT(date)).toISOString()
}


function updateTodo(request, id) {
  for (const todo of request.user.todos) {
    if(todo.id === id) {
      todo.title = request.body.title
      todo.deadline = new Date(request.body.deadline)

      return todo
    }
  }
}


module.exports = { 
  findUserByUsername, 
  isUserFound,
  toBrazillianStandardTime,
  updateTodo
}