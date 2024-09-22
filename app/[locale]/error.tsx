'use client'
import { Button } from '@/components/ui/button'
import { NextPage, NextPageContext } from 'next'

interface ErrorProps {
    statusCode?: number
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
    return (
        <div className=' h-screen flex flex-col items-center justify-center gap-4'>
            <h1 className=' text-4xl text-red-600'>Oops! Something went wrong.</h1>
            {statusCode ? (
                <p>Error {statusCode}: A server-side exception occurred.</p>
            ) : (
                <p>An error occurred on the client-side.</p>
            )}
            <Button asChild>
                <a href='/admin'>Go to dashboard</a>
            </Button>
        </div>
    )
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res?.statusCode || err?.statusCode || 500
    return { statusCode }
}

export default ErrorPage
