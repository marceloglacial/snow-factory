import { collections } from '@/mocks';
import { localizedContent, localizedData } from './utils';

export const getCollections = async (locale?: string): Promise<CollectionsApiResponse> => {
    try {
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
            data: localizedData(collections, locale)
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

export const getCollectionById = async (id: string, locale?: string): Promise<CollectionApiResponse> => {
    const collections = await getCollections(locale)
    const data = collections.data.find((item: any) => item.id === id)
    if (!data) throw Error
    return {
        ...collections,
        data: localizedContent(data, locale)
    };
}
