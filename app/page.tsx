import { Button } from '@/components/ui/button'

import NewTodoForm from '@/components/NewTodoForm'

const getDate = async () => {
  const response = await fetch('https://api.github.com/users/vercel')
  const data = await response.json()
  return data
}

export default async function Home() {
  const data = await getDate()
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Button variant="ghost"> Click on ghost </Button>
      <Button variant="default"> Click on default </Button>
      <Button variant="destructive"> Click on destructive </Button>
      <Button variant="link"> Click on link </Button>
      <Button variant="outline"> Click on outline </Button>
      <Button variant="secondary"> Click on secondary </Button>
      {data && <div>{JSON.stringify(data, null, 2)}</div>}

      <NewTodoForm />
    </main>
  )
}
