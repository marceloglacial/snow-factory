type NavbarItem = {
    name: LocalizationType
    slug: LocalizationType
    icon: IconTypes
    active?: boolean
}

interface NavBarProps {
    variant: 'desktop' | 'mobile'
    items?: NavbarItem[]
}
