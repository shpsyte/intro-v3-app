import Todo from './Todo'

const TodoList = ({ todos }: { todos: any }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <Todo key={todo.id} text={todo.content} />
      })}
    </div>
  )
}

export default TodoList
