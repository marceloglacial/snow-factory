'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import RichEditorToolbar from '@/components/richtext-toolbar'

const RichTextEditor = ({ content }: { content: any }) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content,
        autofocus: true,
        immediatelyRender: false,
    })

    return (
        <div className='border rounded-sm'>
            <RichEditorToolbar editor={editor} />
            <EditorContent editor={editor} className='p-4 min-h-[500px]' />
        </div>
    )
}

export default RichTextEditor
