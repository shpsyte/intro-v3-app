'use server'

import db from './db'

export const newTodo = async (data: FormData) => {
  const todo = await db.todo.create({
    data: {
      content: data.get('content')?.toString() || '',
    },
  })

  return todo
}
