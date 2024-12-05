import { FC } from 'react'
import { getDocumentById } from '@/lib/db'
import { FormCollection } from '@/components/form-collection'

const CollectionPage: FC<CollectionPageProps> = async (props): Promise<JSX.Element> => {
    const params = await props.params
    const result = await getDocumentById('collections', params.id)
    const collection = result.data as CollectionType

    return <FormCollection data={collection} />
}
export default CollectionPage
