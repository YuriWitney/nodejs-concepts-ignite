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


module.exports = { 
  findUserByUsername, 
  isUserFound,
  toBrazillianStandardTime
}