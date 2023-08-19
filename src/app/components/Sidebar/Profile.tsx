import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/mathzsl.png "
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-col truncate">
        <span className="truncate text-sm/5 font-semibold text-zinc-700 ">
          Matheus Soares
        </span>
        <span className="truncate text-sm/5 text-zinc-500">
          maths.soares99@gmail.com
        </span>
      </div>

      <Button variant="ghost" type="button" title="Logout">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
