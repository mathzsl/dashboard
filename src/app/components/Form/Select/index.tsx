'use client'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDownIcon } from 'lucide-react'
import { ReactNode } from 'react'

interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100 data-[palceholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="font-medium text-zinc-900"
        />
        <SelectPrimitive.Icon>
          <ChevronDownIcon className="h-5 w-5" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] animate-SlideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
