import NewTodoForm from '@/components/NewTodoForm'
import { PropsWithChildren } from 'react'

export default function DashboardLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <h1>Dashboard Layout</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}
