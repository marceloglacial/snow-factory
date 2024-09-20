import { getCollectionById, getContent } from '@/lib'

interface PageDataResponse {
    data: {
        title: string,
        items: any[],
        total: number
    },
    status: StatusType
}

export const getPageData = async (id: string, locale?: string): Promise<PageDataResponse> => {
    try {
        const collection = await getCollectionById(id, locale)
        const content = await getContent(id, locale)

        return {
            data: {
                title: collection.data.title,
                items: content.data,
                total: content.data.length,
            },
            status: {
                code: 200,
                message: 'Sucess',
            },
        }
    } catch (e) {
        console.error('Fetch Error:', e);
        return {
            status: {
                error: e,
                code: 400,
                message: 'Error fetching data'
            },
            data: {
                title: '',
                items: [],
                total: 0
            }
        }
    }
}
