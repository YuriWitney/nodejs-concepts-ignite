# nodejs-concepts-ignite

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT) [![Actions Status](https://github.com/waldemarnt/node-typescript-api/workflows/Complete%20workflow/badge.svg)](https://github.com/YuriWitney/nlw-esports-server/actions)

Challenge 1 solution of ignite node route from [Rocketseat](https://app.rocketseat.com.br/) 

# Summary

- [Installation](#Installation)
- [Routes](#Routes)
- [Tools and lessons viewed](#Tools-and-lessons-viewed)
- [Techs](#Techs)
- [References](#References)

# Installation

To install this project, run the commands:
`git clone https://github.com/YuriWitney/nodejs-concepts-ignite`

- For npm users
  `npm run install`

- For yarn users:
  `yarn install`

# Routes
The routes that the API offers are as follows:

## Users route:

**(POST) /users**<br />
Creates a new user. Each user will have name, username, id and todos fields.<br /><br />
Request:
```JavaScript
//BODY:
{ 
	"name": "ANY_NAME", 
	"username": "ANY_USERNAME"
}
```
Response:
```JavaScript
{
	"name": "ANY_NAME",
	"username": "ANY_USERNAME",
	"id": "SOME_ID",
	"todos": []
}
```

**(POST) /todos**<br />
Creates a new todo for a user. Each user can have multiple todos. A todo will have a title, deadline, id, done and created at fields.<br /><br />
Request:
```JavaScript
//HEADER:
{ 
	"username": "ANY_USERNAME"
}
//BODY:
{ 
	"title": "SOME_TITLE", 
	"deadline": "YYYY-MM-DD"
}
```
Response:
```JavaScript
{
	"title": "SOME_TITLE",
	"deadline": "YYYY-MM-DDT00:00:00.000Z",
	"id": "SOME_ID",
	"done": false,
	"created_at": "SOME_ACTUAL_DATE"
}
```

**(GET) /todos**<br />
Lists the todos for a user.<br /><br />
Request:
```JavaScript
//HEADER:
{ 
	"username": "ANY_USERNAME"
}
```
Response:<br />
Todo list.<br />

**(PUT) /todos/:id**<br />
Updates some todo. The user goes in Header and the todo Id in param. Title and deadline are the only fields able to update that way.<br /><br />
Request:
```JavaScript
//HEADER:
{ 
	"username": "ANY_USERNAME"
}
//BODY:
{ 
	"title": "SOME_TITLE", 
	"deadline": "YYYY-MM-DD"
}
```
Response:
```JavaScript
{
	"title": "SOME_TITLE",
	"deadline": "YYYY-MM-DDT00:00:00.000Z",
	"id": "SOME_ID",
	"done": false,
	"created_at": "SOME_ACTUAL_DATE"
}
```

**(PATCH) /todos/:id/done**<br />
Sets a todo to done. The user goes in Header and the todo Id in param. <br /><br />
Request:
```JavaScript
//HEADER:
{ 
	"username": "ANY_USERNAME"
}
```
Response:
```JavaScript
{
	"title": "SOME_TITLE",
	"deadline": "YYYY-MM-DDT00:00:00.000Z",
	"id": "SOME_ID",
	"done": true,
	"created_at": "SOME_ACTUAL_DATE"
}
```

**(DELETE) /todos/:id/**<br />
Remove a todo from a user. The user goes in Header and the todo Id in param. <br /><br />
Request:
```JavaScript
//HEADER:
{ 
	"username": "ANY_USERNAME"
}
```
Response (Removed Todo):
```JavaScript
{
	"title": "SOME_TITLE",
	"deadline": "YYYY-MM-DDT00:00:00.000Z",
	"id": "SOME_ID",
	"done": true,
	"created_at": "SOME_ACTUAL_DATE"
}
```



# Techs

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/githubactions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

# References

- [Rocketseat](https://app.rocketseat.com.br/)
