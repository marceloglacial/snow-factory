type UsersType = {
    id: string,
    title: LocalizationType,
    slug: LocalizationType
    avatar: string
}

export const users: UsersType[] = [
    {
        id: '1',
        title: {
            en: 'John Doe',
            'pt-BR': 'João Silva'
        },
        slug: {
            en: 'john-doe',
            'pt-BR': 'joao-silva'
        },
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: '2',
        title: {
            en: 'Jane Smith',
            'pt-BR': 'Maria Oliveira'
        },
        slug: {
            en: 'jane-smith',
            'pt-BR': 'maria-oliveira'
        },
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        id: '3',
        title: {
            en: 'Michael Johnson',
            'pt-BR': 'Miguel Ferreira'
        },
        slug: {
            en: 'michael-johnson',
            'pt-BR': 'miguel-ferreira'
        },
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        id: '4',
        title: {
            en: 'Emily Davis',
            'pt-BR': 'Emília Costa'
        },
        slug: {
            en: 'emily-davis',
            'pt-BR': 'emilia-costa'
        },
        avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
    },
    {
        id: '5',
        title: {
            en: 'William Brown',
            'pt-BR': 'Guilherme Souza'
        },
        slug: {
            en: 'william-brown',
            'pt-BR': 'guilherme-souza'
        },
        avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    {
        id: '6',
        title: {
            en: 'Elizabeth Wilson',
            'pt-BR': 'Isabela Ramos'
        },
        slug: {
            en: 'elizabeth-wilson',
            'pt-BR': 'isabela-ramos'
        },
        avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
    }
];
