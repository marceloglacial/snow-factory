import { FC } from 'react'
import {
    CalendarDays,
    ClipboardType,
    FileText,
    Home,
    SearchIcon,
    Settings,
    UsersIcon,
} from 'lucide-react'

const Icon: FC<IconProps> = ({ icon, size }): JSX.Element => {
    const iconSize = size || 5
    const icontComponent: icontComponentType = {
        home: <Home className={`h-${iconSize} w-${iconSize}`} />,
        users: <UsersIcon className={`h-${iconSize} w-${iconSize}`} />,
        page: <FileText className={`h-${iconSize} w-${iconSize}`} />,
        search: <SearchIcon className={`h-${iconSize} w-${iconSize}`} />,
        form: <ClipboardType className={`h-${iconSize} w-${iconSize}`} />,
        event: <CalendarDays className={`h-${iconSize} w-${iconSize}`} />,
        settings: <Settings className={`h-${iconSize} w-${iconSize}`} />,
    }
    return icontComponent[icon]
}

export default Icon
