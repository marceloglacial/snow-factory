import { FC } from 'react'
import { FormContent } from '@/components/form-content'
import { getDocumentById } from '@/lib/db'

const contentPageNew: FC<PageParamsProps> = async (props): Promise<JSX.Element> => {
    const params = await props.params
    const result = await getDocumentById('collections', params.slug)
    return <FormContent data={result.data} />
}
export default contentPageNew
