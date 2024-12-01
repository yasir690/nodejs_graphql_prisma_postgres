1:fetch all todo item

query {
  todo {
    id
    name
    description
  }
}

2:Create a new Todo item.

mutation createTodo($todo: TodoInput!) {
  createTodo(todo: $todo) {
    id
    name
    description
  }
}

variable:
{
  "todo": {
    "name": "Learn GraphQL",
    "description": "Study GraphQL basics and build an API"
  }
}

3:update todo

mutation updateTodo($id: Int!, $todo: TodoInput!) {
  updateTodo(id: $id, todo: $todo) {
    id
    name
    description
  }
}

variable:

{
  "id": 1,
  "todo": {
    "name": "Learn GraphQL - Updated",
    "description": "Updated description"
  }
}

4:deleteTodo

mutation deleteTodo($id: Int!) {
  deleteTodo(id: $id) {
    id
    name
    description
  }
}

variable:

{
  "id": 1
}
