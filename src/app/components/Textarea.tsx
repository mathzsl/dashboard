import { ComponentProps } from 'react'

type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className="min-h-[128px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
    />
  )
}
