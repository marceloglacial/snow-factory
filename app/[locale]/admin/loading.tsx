import { Loader } from 'lucide-react'

const PageLoading = () => {
    return (
        <div className='flex flex-col items-center gap-1 text-center'>
            <h3 className='text-2xl font-bold tracking-tight'>Loading</h3>
            <Loader className='animate-spin' />
        </div>
    )
}
export default PageLoading
