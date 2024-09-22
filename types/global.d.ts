interface RootLayoutProps {
    children: React.ReactNode
    params: {
        locale: string
        slug: string
    }
}

type LocalizationType = {
    [locale: string]: string
}

type LocalizedContent = { [key: string]: any };
type Content = { [key: string]: { [locale: string]: string } | string };
