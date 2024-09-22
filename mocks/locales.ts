type LocaleType = {
    id: string,
    title: string,
    slug: string
    icon: string
    isDefault?: boolean
}

export const locales: LocaleType[] = [
    {
        id: '1',
        title: 'English',
        slug: 'en',
        icon: '🇨🇦',
        isDefault: true
    },
    {
        id: '3',
        title: 'Brazilian Portuguese',
        slug: 'pt-BR',
        icon: '🇧🇷'
    },
];
