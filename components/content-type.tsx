import { FC } from 'react'
import RichTextEditor from './richtext-editor'

type BlockType = {
    id: string
    type: string
    data: any
}

interface ContentTypeProps {
    data: BlockType[]
    locale: string
}

const ContentType: FC<ContentTypeProps> = (props): JSX.Element => {
    const blocks = props.data
    return (
        <>
            {blocks.map((block) => {
                return (
                    <Block
                        key={block.id}
                        type={block.type}
                        content={block.data}
                        locale={props.locale}
                    />
                )
            })}
        </>
    )
}
export default ContentType

const Block = (props: any) => {
    switch (props.type) {
        case 'richText':
            return <RichTextEditor content={props.content.content[props.locale]} />
        case 'form':
            return <>Form: {props.content.formId}</>
        case 'text':
            return <>Text: {props.content.content[props.locale]}</>
        default:
            return <></>
    }
}
