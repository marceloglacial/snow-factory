import { events, forms, pages, users } from '@/mocks';
import contentTypeData from '@/mocks/contenttype';

export const getContentTypes = async (): Promise<ApiResponse> => {
    try {
        // const response = await fetch(`${process.env.API_URL}/api/${collection}`, { cache: 'no-cache' })
        // const data = await response.json()
        // return data
        return contentTypeData
    } catch (e) {
        console.error('Fetch Error:', e);
        return {
            status: {
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

export const getContentTypeByCollection = async (collection: string) => {
    const data = await getContentTypes()
    return data.data.find((item: any) => item.collection === collection);
}

export const getContenTypeBySlug = async (slug: string, locale: string): Promise<ContentTypeType | undefined> => {
    const data = await getContentTypes()
    return data.data.find((item: any) => item.slug[locale] === slug);
}

export const getLocales = async () => {
    return [
        {
            icon: `🇨🇦`,
            locale: 'en',
            title: 'English'
        },
        {
            icon: `🇧🇷`,
            locale: 'pt-BR',
            title: 'Potuguês'
        }
    ]
}


export const getContentData = async (collection: string): Promise<ApiResponse> => {
    try {
        // const response = await fetch(`${process.env.API_URL}/api/${collection}`, { cache: 'no-cache' })
        // const data = await response.json()
        // return data
        const data: any = {
            pages,
            users,
            events,
            forms
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

export const getContentDataById = async (collection: string, id: string): Promise<any> => {
    try {
        const response = await fetch(`${process.env.API_URL}/api/${collection}/id/${id}`, { cache: 'no-cache' })
        const data = await response.json()
        return data
    } catch (e) {
        console.error('Fetch Error:', e);
        return {
            error: {
                message: 'Fetch error!',
                error: e
            }
        }
    }
}
