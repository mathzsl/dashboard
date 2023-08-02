import { Search } from 'lucide-react'
import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-300 px-5 py-8">
      <Logo />

      <div className="mx-1 flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500 " />
        <input
          placeholder="Search"
          className="tex-zinc-900 flex-1 border-0 bg-transparent p-0 text-zinc-500 placeholder-zinc-500"
        />
      </div>

      <MainNavigation />
    </aside>
  )
}
