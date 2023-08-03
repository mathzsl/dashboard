import { LogOut } from 'lucide-react'

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

      <button
        type="button"
        title="Logout"
        className="ml-auto rounded-md p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
