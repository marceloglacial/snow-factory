import { APP_SETTINGS } from '@/constants';
import { getCollectionById, getContent } from '@/lib'

interface PageDataResponse {
    data: {
        title: string,
        items: any[],
        total: number
    },
    status: StatusType
}

export const getPageData = async (id: string): Promise<PageDataResponse> => {
    try {
        const collection = await getCollectionById(id)
        const content = await getContent(id)

        const table = {
            ...content,
            data: content.data.map((item: any) => {
                return {
                    ...item,
                    title: item.title[APP_SETTINGS.DEFAULT_LOCALE],
                    slug: item.slug[APP_SETTINGS.DEFAULT_LOCALE]
                }
            })
        }

        return {
            data: {
                title: collection.data.title[APP_SETTINGS.DEFAULT_LOCALE],
                items: table.data,
                total: table.data.length,
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
