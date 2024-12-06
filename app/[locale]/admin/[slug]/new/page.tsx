import { FC } from 'react'
import { FormCollection } from '@/components/form-collection'

const CollectionsPageNew: FC<PageParamsProps> = async (props): Promise<JSX.Element> => {
    const params = await props.params

    switch (params.slug) {
        case 'collections':
            return <FormCollection />

        default:
            throw new Error(`Failed to load ${params.slug} collection`)
    }
}
export default CollectionsPageNew
