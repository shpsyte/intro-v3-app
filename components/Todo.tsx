import React, { useState } from 'react'

interface TodoProps {
  text: string
}

const Todo: React.FC<TodoProps> = ({ text }) => {
  return (
    <div>
      <label>
        <span className="text-yellow-50">{text}</span>
      </label>
    </div>
  )
}

export default Todo
