import { CheckCircle2, File, Trash2 } from 'lucide-react'
import { formatBytes } from '../../utils/format-bytes'
import { Button } from '../../Button'

interface FileItemProps {
  name: string
  size: number
}

export function FileItem({ name, size }: FileItemProps) {
  const state = 'complete' as 'progress' | 'error' | 'complete'

  return (
    <div className="flex items-start gap-4 rounded-lg border border-zinc-200 p-4">
      <div className="flex items-center rounded-full border-6 border-violet-50 bg-violet-100 p-2 text-violet-600">
        <File className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-medium text-error-700">
            Upload failed, please try again.
          </span>
          <span className="text-sm text-error-600">{name}</span>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-medium text-zinc-700">{name}</span>
          <span className="text-sm text-zinc-500">{formatBytes(size)}</span>

          <div className="flex items-center gap-3">
            <div className="mt-1 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button variant="ghost" type="button" title="Logout">
          <Trash2 className="h-5 w-5 text-zinc-500" />
        </Button>
      )}
    </div>
  )
}
