import { useState, type FC } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from './MenuBar'

type Props = unknown

export const Tiptap: FC<Props> = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>'
  })
  const [isSlashPress, setIsSlashPress] = useState(false)
  if (editor === null) return null
  return (
    <section className="">
      {isSlashPress && <MenuBar editor={editor} onClick={() => setIsSlashPress(false)} />}
      <EditorContent
        editor={editor}
        onKeyDown={(e) => {
          console.log(e.currentTarget.innerHTML)
          if (e.key === '/') {
            setIsSlashPress(true)
          }
        }}
      />
    </section>
  )
}
