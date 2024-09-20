import { locales } from '@/mocks';

export const getLocales = async (): Promise<ApiResponse> => {
    try {
        return {
            data: locales,
            meta: {
                total: locales.length,
                page: 1,
                pages: 1
            },
            status: {
                code: 200,
                message: 'Sucess',
            },
        }
    } catch (e) {
        console.error('Fetch Error:', e);
        return {
            meta: {
                total: 0,
                page: 1,
                pages: 1
            },
            status: {
                error: e,
                code: 400,
                message: 'Error fetching data'
            },
            data: []
        }
    }
}
