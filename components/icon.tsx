import {
    ClipboardType,
    FileText,
    Home,
    Package,
    SearchIcon,
    ShoppingCart,
    UsersIcon,
} from 'lucide-react'
import { FC, ReactElement } from 'react'

interface IconProps {
    icon: string
    size?: number
}

type icontComponentType = {
    [key: string]: ReactElement
}

const Icon: FC<IconProps> = ({ icon, size }): JSX.Element => {
    const iconSize = size || 5
    const icontComponent: icontComponentType = {
        package: <Package className={`h-${iconSize} w-${iconSize}`} />,
        shoppingcart: <ShoppingCart className={`h-${iconSize} w-${iconSize}`} />,
        home: <Home className={`h-${iconSize} w-${iconSize}`} />,
        users: <UsersIcon className={`h-${iconSize} w-${iconSize}`} />,
        pages: <FileText className={`h-${iconSize} w-${iconSize}`} />,
        search: <SearchIcon className={`h-${iconSize} w-${iconSize}`} />,
        forms: <ClipboardType className={`h-${iconSize} w-${iconSize}`} />,
    }
    return icontComponent[icon]
}

export default Icon
