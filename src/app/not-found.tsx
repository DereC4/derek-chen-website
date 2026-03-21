import Link from 'next/link';
import UnderConstructionNotice from '@/components/UnderConstructionNotice';

export default function NotFound() {
    return (
        <div className='min-h-screen flex items-center justify-center py-12 relative'>
            <div className='max-w-4xl px-4 text-center'>
                <div className='mb-8'>
                    <h1 className='text-6xl md:text-7xl font-bold text-foreground mb-4'>404</h1>
                    <h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>Page Not Found</h2>
                    <p className='text-lg text-muted-foreground mb-8'>
                        Looks like this page doesn't exist yet. It might be under construction!
                    </p>
                </div>
                <div className='mb-12'>
                    <UnderConstructionNotice />
                </div>
                <Link
                    href='/'
                    className='inline-block px-6 py-3 bg-foreground text-background rounded-lg font-semibold hover:opacity-90 transition-opacity'
                >
                    Back to Home
                </Link>
            </div>

            <div className='fixed bottom-6 right-6 text-sm text-muted-foreground'>This page could not be found.</div>
        </div>
    );
}
