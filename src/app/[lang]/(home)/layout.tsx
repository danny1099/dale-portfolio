import { Topbar } from '@/modules/home/components'

export default function Layout({ children }: Children) {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-[auto_1fr]">
      <Topbar />
      <main className="bg-background min-h-full overflow-y-auto scrollbar-tiny scrollbar-track scrollbar-thumb">
        {children}
      </main>
    </div>
  )
}
