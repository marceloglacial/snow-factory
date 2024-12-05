import { FC } from 'react'
import { getCollectionById } from '@/lib/db'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { APP_SETTINGS } from '@/constants'
import Link from 'next/link'

const AllCollectionPage: FC = async (): Promise<JSX.Element> => {
    const result = (await getCollectionById('collections', 'title')) as ApiResponse<
        CollectionType[]
    >
    const collections = result.data as CollectionType[]

    return (
        <Card className='mx-auto w-full max-w-screen-lg'>
            <CardHeader>
                <CardTitle>Collections</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='grid w-full items-center gap-4'>
                    <div className='flex flex-col space-y-1.5'>
                        {collections.map((collection) => (
                            <Link
                                key={collection.id}
                                href={`${APP_SETTINGS.DASHBOARD_PATH}/collections/${collection.id}`}
                            >
                                {collection.title}
                            </Link>
                        ))}
                        <div className='my-2 h-px bg-gray-200' />
                        <Link href={`${APP_SETTINGS.DASHBOARD_PATH}/collections/new`}>
                            Add Collection
                        </Link>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default AllCollectionPage
