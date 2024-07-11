import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-24'>
            <Card className='mx-auto max-w-sm'>
                <CardHeader>
                    <CardTitle className='text-xl'>Sign Up</CardTitle>
                    <CardDescription>Enter your information to create an account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='grid gap-4'>
                        <Button variant='outline' className='w-full'>
                            Sign up with Google
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}
