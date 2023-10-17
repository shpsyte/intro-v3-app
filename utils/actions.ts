'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

export const newTodo = async (data: FormData) => {
  const todo = await db.todo.create({
    data: {
      content: data.get('content')?.toString() || '',
    },
  })

  revalidatePath('/todos')
}

export const reval = () => {
  revalidatePath('/todos')
}

export const completeTodo = async (id) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  })

  revalidatePath('/todos')
}
