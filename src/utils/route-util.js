function isUserAlreadyExists(usersArray, username) {
  const result = usersArray.filter( user =>
    user.username === username
  )

  return result === []
}

module.exports = isUserAlreadyExists