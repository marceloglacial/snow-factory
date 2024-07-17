export const getContenttypes = async (): Promise<IContentType[]> => {
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
    ]
}
