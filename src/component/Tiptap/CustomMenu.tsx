import { type Editor } from '@tiptap/react'
import { type ReactNode, type FC } from 'react'

type Props = {
  editor: Editor
  children: ReactNode
  className?: string
}

export const MenuTools: FC<Props> = ({ editor, children, className }) => {
  return <section className={className}>{children}</section>
}
