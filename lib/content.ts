import { events, forms, pages, users } from '@/mocks';
import { localizedData } from './utils';

export const getContent = async (collection: string, locale?: string): Promise<ApiResponse> => {
    try {
        // const response = await fetch(`${process.env.API_URL}/api/${collection}`, { cache: 'no-cache' })
        // const data = await response.json()
        // return data

        const data: any = {
            pages: localizedData(pages, locale),
            users: localizedData(users, locale),
            events: localizedData(events, locale),
            forms: localizedData(forms, locale),
        }

        return {
            status: {
                code: 200,
                message: 'Success!'
            },
            meta: {
                total: pages.length,
                page: 0,
                pages: 0
            },
            data: data[collection]
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

export const getContentById = async (collection: string, id: string, locale?: string): Promise<SingleContentApiResponse> => {
    const content = await getContent(collection, locale)
    const data = content.data.find((item: any) => item.id === id)

    if (!data) throw Error

    return {
        ...content,
        data
    };
}
