import { FC } from 'react'
import { getDocumentById } from '@/lib/db'
import { FormCollection } from '@/components/form-collection'

const CollectionPage: FC<PageParamsProps> = async (props): Promise<JSX.Element> => {
    const params = await props.params
    const result = await getDocumentById('collections', params.id)
    const collection = result.data as CollectionType

    switch (params.slug) {
        case 'collections':
            return <FormCollection data={collection} />

        default:
            throw new Error(`Failed to load ${params.slug} collection`)
    }
}
export default CollectionPage
