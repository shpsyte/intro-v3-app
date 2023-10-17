// import { useRouter } from 'next/navigation'

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return <div>This is docs page ID {params.id.join('-')}</div>
}
