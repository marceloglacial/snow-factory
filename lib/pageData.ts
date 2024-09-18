import { APP_SETTINGS } from '@/constants';
import { getContentData, getContentTypeByCollection } from '@/lib'

interface PageDataResponse {
    data: {
        title: string,
        items: any[],
        total: number
    },
    status: StatusType
}

export const getPageData = async (collection: string): Promise<PageDataResponse> => {
    try {
        const contentType = await getContentTypeByCollection(collection)
        const contentData = await getContentData(collection)
        const tableData = {
            ...contentData,
            data: contentData.data.map(item => {
                return {
                    ...item,
                    title: item.title[APP_SETTINGS.DEFAULT_LOCALE],
                    slug: item.slug[APP_SETTINGS.DEFAULT_LOCALE]
                }
            })
        }

        return {
            data: {
                title: contentType.name[APP_SETTINGS.DEFAULT_LOCALE],
                items: tableData.data,
                total: tableData.data.length,
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
