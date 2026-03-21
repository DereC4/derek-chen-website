import UnderConstructionNotice from '@/components/UnderConstructionNotice';

export default function ProjectsPage() {
    return (
        <div className='min-h-screen flex items-center justify-center py-12'>
            <div className='max-w-4xl px-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-foreground mb-8 text-center'>All Projects</h1>
                <UnderConstructionNotice />
            </div>
        </div>
    );
}
