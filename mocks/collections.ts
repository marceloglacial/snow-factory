export const collections: CollectionsType[] = [
    {
        id: 'pages',
        title: {
            en: 'Pages',
            'pt-BR': 'Páginas',
        },
        icon: 'page',
        fields: [
            {
                type: 'input',
                inputType: 'text',
                label: 'Title',
                required: true
            }
        ]
    },
    {
        id: 'events',
        title: {
            en: 'Events',
            'pt-BR': 'Eventos',
        },
        icon: 'event',
        fields: []
    },
    {
        id: 'forms',
        title: {
            en: 'Forms',
            'pt-BR': 'Formulários',
        },
        icon: 'form',
        fields: []
    },
]