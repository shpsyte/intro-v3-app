'use client'

import React, { useState } from 'react'
import { completeTodo } from '@/utils/actions'
import { useTransition } from 'react'
interface TodoProps {
  text: string
  id: string
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  console.log('thisis my', todo)
  const [isPending, starttranstisin] = useTransition()
  return (
    <div
      className={`flex justify-between items-center bg-gray-800 p-4 my-2 rounded-md shadow-lg ${
        todo.completed ? 'line-through' : ''
      }`}
      onClick={() => starttranstisin(() => completeTodo(todo.id))}
    >
      <span className="text-white!">{todo.content}</span>
    </div>
  )
}

export default Todo
