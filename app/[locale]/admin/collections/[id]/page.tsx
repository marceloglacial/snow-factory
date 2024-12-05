import { FC } from 'react'

const CollectionPage: FC<CollectionPageProps> = async (props): Promise<JSX.Element> => {
    return <>Collection Page: {props.params.id}</>
}
export default CollectionPage
