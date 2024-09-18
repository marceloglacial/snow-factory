import { collections } from '@/mocks';

export const getCollections = async (): Promise<CollectionsApiResponse> => {
    try {
        // const response = await fetch(`${process.env.API_URL}/api/${collection}`, { cache: 'no-cache' })
        // const data = await response.json()
        // return data
        return {
            status: {
                code: 200,
                message: 'Success!'
            },
            meta: {
                total: collections.length,
                pages: 0,
                page: 0
            },
            data: collections
        }
    } catch (e) {
        console.error('Fetch Error:', e);
        return {
            status: {
                error: e,
                code: 400,
                message: 'Error fetching data'
            },
            meta: {
                total: 0,
                page: 0,
                pages: 0
            },
            data: []
        }
    }
}

export const getCollectionById = async (id: string): Promise<CollectionApiResponse> => {
    const collections = await getCollections()
    const data = collections.data.find((item: any) => item.id === id)
    if (!data) throw Error
    return {
        ...collections,
        data
    };
}
