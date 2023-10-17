'use client'
import { Button } from '@/components/ui/button'
import { reval } from '@/utils/actions'

export default function Page() {
  return (
    <>
      <div>This is doc page</div>
      <div className="flex flex-col">
        <h1>Teste</h1>
        <form action={reval}>
          <Button type="submit">Click me</Button>
        </form>
      </div>
    </>
  )
}
