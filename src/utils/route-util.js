function isUserAlreadyExists(usersArray, username) {
  const result = usersArray.filter( user =>
    user.username === username
  )

  return result[0]?.username !== undefined
}

module.exports = isUserAlreadyExists