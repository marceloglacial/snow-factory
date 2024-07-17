export const getContentTypes = async (): Promise<ContentTypeType[]> => {
    return [
        {
            name: {
                en: 'Pages',
                'pt-BR': 'Páginas',
            },
            icon: 'page',
            slug: {
                en: 'pages',
                'pt-BR': 'paginas',
            },
            collection: 'pages',
        },
        {
            name: {
                en: 'Events',
                'pt-BR': 'Eventos',
            },
            icon: 'event',
            slug: {
                en: 'events',
                'pt-BR': 'eventos',
            },
            collection: 'events',
        },
        {
            name: {
                en: 'Forms',
                'pt-BR': 'Formulários',
            },
            icon: 'form',
            slug: {
                en: 'forms',
                'pt-BR': 'events',
            },
            collection: 'forms',
        },
    ]
}

export const getContenTypeBySlug = async (slug: string, locale: string): Promise<ContentTypeType | undefined> => {
    const data = await getContentTypes()
    return data.find((item: any) => item.slug[locale] === slug);
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


export const getContentData = async (collection: string): Promise<any> => {
    try {
        const response = await fetch(`${process.env.API_URL}/api/${collection}`, { cache: 'no-cache' })
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
