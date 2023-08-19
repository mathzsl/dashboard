'use client'

import { formatBytes } from '../../utils/format-bytes'
import { useFileInput } from './Root'
import { File, Trash } from 'lucide-react'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Button } from '../../Button'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="flex items-center rounded-full border-6 border-violet-50 bg-violet-100 p-2 text-violet-600">
              <File className="h-4 w-4" />
            </div>

            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </span>

              <div className="flex items-center gap-3">
                <div className="mt-1 flex-1 rounded-full bg-zinc-100">
                  <div className="h-2 w-2/5 rounded-full bg-violet-600" />
                </div>
                <span className="text-sm">40%</span>
              </div>
            </div>
            <Button variant="ghost" type="button" title="Logout">
              <Trash className="h-5 w-5 text-zinc-500" />
            </Button>
          </div>
        )
      })}
    </div>
  )
}
