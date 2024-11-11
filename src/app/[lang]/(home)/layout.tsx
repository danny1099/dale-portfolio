import { Topbar } from '@/modules/home/components'

export default function Layout({ children }: Children) {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-[auto_1fr]">
      <Topbar />
      <main className="bg-background min-h-full">{children}</main>
    </div>
  )
}
