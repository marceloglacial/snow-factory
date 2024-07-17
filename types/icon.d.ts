type IconTypes = 'home' | 'users' | 'page' | 'search' | 'form' | 'event' | 'settings'

interface IconProps {
    icon: IconTypes
    size?: number
}

type icontComponentType = {
    [key in IconTypes]: ReactElement
}
