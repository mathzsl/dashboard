import { CheckCircle2, File, Trash2 } from 'lucide-react'
import { formatBytes } from '../../utils/format-bytes'
import { Button } from '../../Button'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    wrapper: 'flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'flex items-center rounded-full border-6 border-violet-50 bg-violet-100 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        wrapper: 'dark:border-zinc-700',
      },
      complete: {
        wrapper: 'border-violet-500 dark:border-violet-300/30',
      },
      error: {
        wrapper:
          'bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        deleteButton:
          'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
      },
    },
  },
  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { wrapper, icon, deleteButton } = fileItem({ state })

  return (
    <div className={wrapper()}>
      <div className={icon()}>
        <File className="h-4 w-4" />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-medium text-error-700 dark:text-error-400 ">
            Upload failed, please try again.
          </span>
          <span className="text-sm text-error-600 dark:text-error-500">
            {name}
          </span>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
            {name}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {formatBytes(size)}
          </span>

          <div className="flex items-center gap-3">
            <div className="mt-1 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <div
                className="h-2 rounded-full bg-violet-600 dark:bg-violet-400"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              />
            </div>
            <span className="text-sm dark:text-zinc-300">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button
          className={deleteButton()}
          variant="ghost"
          type="button"
          title="Logout"
        >
          <Trash2 className="h-5 w-5 " />
        </Button>
      )}
    </div>
  )
}
