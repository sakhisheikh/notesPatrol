const todo = []

const resolvers = {
  Query: {
    myTodos(_, args, { user }) {
      if (!user) {
        throw new Error('You are not authenticated!')
      }

      return this.myTodos.filter(todo => todo.userId === user.sub)
    }
  },

  Mutation: {
    addTodo(_, { title }, { user }) {
      if (!user) {
        throw new Error('You are not authenticated!')
      }

      todos.push({
        userId: user.sub,
        title
      })

      return todos.find(todo => todo.userId === user.sub && todo.title === title)
    }
  }
}

module.exports = resolvers;


