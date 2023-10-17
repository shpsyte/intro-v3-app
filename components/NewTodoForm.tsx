'use client'
import React, { useState } from 'react'

import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  const [state, updateState] = useState<string>('')

  const addtodo = () => {
    newTodo
  }
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="content" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewTodoForm
