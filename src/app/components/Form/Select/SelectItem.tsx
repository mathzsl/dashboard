'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      {...props}
      className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highLighted]:bg-zinc-50 dark:data-[highLighted]:bg-zinc-700"
    >
      <Select.ItemText asChild>
        <span className="text-zinc-900 dark:text-zinc-100">{text}</span>
      </Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500 dark:text-violet-300" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
