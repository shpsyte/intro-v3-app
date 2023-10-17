import TodoList from '@/components/TodoList'
import prisma from '@/utils/db'

const getTodos = async () => {
  const todos = await prisma.todo.findMany({})
  return todos
}

export default async function Page() {
  const todos = await getTodos() // get all todos
  return (
    <>
      <div>My todos</div>
      <div>
        <TodoList todos={todos} />
      </div>
    </>
  )
}
