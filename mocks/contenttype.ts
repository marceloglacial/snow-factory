type DataType = {
    name: LocalizationType,
    slug: LocalizationType,
    icon: string,
    collection: string
}

interface DataProps extends ApiResponse {
    data: DataType[]
}

export const data: DataProps = {
    data: [
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
    ],
    meta: {
        total: 10,
        page: 1,
        pages: 1
    },
    status: {
        code: 200,
        message: 'success'
    }
}

export default data
