const todoSchema = `#graphql
  
  type Todo {
  id: Int!
  name: String
  description: String
}

# Define the input type for creating a new Todo
input TodoInput {
  name: String!
  description: String
}

# Query type
type Query {
  todo: [Todo]
  gettodo(id:Int):Todo
}

# Mutation type
type Mutation {
  createTodo(todo: TodoInput!): Todo
  updateTodo(id:Int,todo:TodoInput):Todo
  deleteTodo(id:Int):Todo
}
 

`;
export default todoSchema;
