'use client'
import {
    Bold,
    Italic,
    Strikethrough,
    Pilcrow,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    List,
    ListOrdered,
    TextQuote,
    Minus,
    Undo,
    Redo,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const RichEditorToolbar = (props: { editor: any }) => {
    const editor = props.editor
    if (!editor) {
        return null
    }
    const buttonClassname = 'rounded-sm bg-black text-white'
    const iconClassName = 'h-4 w-4 m-2'

    return (
        <div className='control-group border-b'>
            <div className='button-group flex gap-2 p-2'>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? buttonClassname : ''}
                >
                    <Bold className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? buttonClassname : ''}
                >
                    <Italic className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? buttonClassname : ''}
                >
                    <Strikethrough className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? buttonClassname : ''}
                >
                    <Pilcrow className={iconClassName} />
                </button>
                <Separator orientation='vertical' className='h-100' />
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? buttonClassname : ''}
                >
                    <Heading1 className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? buttonClassname : ''}
                >
                    <Heading2 className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? buttonClassname : ''}
                >
                    <Heading3 className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    className={editor.isActive('heading', { level: 4 }) ? buttonClassname : ''}
                >
                    <Heading4 className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    className={editor.isActive('heading', { level: 5 }) ? buttonClassname : ''}
                >
                    <Heading5 className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    className={editor.isActive('heading', { level: 6 }) ? buttonClassname : ''}
                >
                    <Heading6 className={iconClassName} />
                </button>
                <Separator orientation='vertical' className='h-100' />
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? buttonClassname : ''}
                >
                    <List className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? buttonClassname : ''}
                >
                    <ListOrdered className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? buttonClassname : ''}
                >
                    <TextQuote className={iconClassName} />
                </button>
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <Minus className={iconClassName} />
                </button>
                <Separator orientation='vertical' className='h-100' />
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                >
                    <Undo className={iconClassName} />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().chain().focus().redo().run()}
                >
                    <Redo className={iconClassName} />
                </button>
            </div>
        </div>
    )
}
export default RichEditorToolbar
