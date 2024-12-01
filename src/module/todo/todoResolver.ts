import prisma from "../../config/database";


const todoResolver = {
  Query: {
    todo: async () => {
      return await prisma.todo.findMany(); // Fetch all todos from the database
    },
    gettodo:async(_,{id})=>{
      return await prisma.todo.findUnique({where:{id:id}})
    }
  },

  Mutation: {
    createTodo: async (_parent, args) => {
      // args.todo should contain the todo data
      const { todo } = args;
      if (!todo) {
        throw new Error("todo argument is required");
      }

      const { name, description } = todo;

      if (!name) {
        throw new Error("name is required");
      }

      // Create the new todo entry in the database
      const newtodo = await prisma.todo.create({
        data: {
          name,
          description: description || "", // Provide a default value for description if missing
        },
      });

      return newtodo;
    },

    updateTodo: async (_parent, { id, todo }) => {
      // Ensure id and todo are provided
      if (!id || !todo) {
        throw new Error("Both id and todo are required");
      }

      const { name, description } = todo;

      // Perform the update in the database
      const updatedTodo = await prisma.todo.update({
        where: {
          id: id,
        },
        data: {
          name,
          description,
        },
      });

      return updatedTodo;
    },

    deleteTodo:async(_parent,{id})=>{
      if (!id) {
        throw new Error("id is required");
      }
      const deletedTodo = await prisma.todo.delete({
        where: {
          id: id,
        },
      });
      return deletedTodo;

    }
  },
};

export default todoResolver;
