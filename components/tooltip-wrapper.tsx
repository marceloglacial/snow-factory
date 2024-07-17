import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'

export default function TooltipWrapper({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <TooltipProvider>
            {children}
            <Toaster position='top-center' richColors closeButton />
        </TooltipProvider>
    )
}
