import constructionVehicle from '@/assets/pics/constructionVehicle.png';
import Image from 'next/image';

export default function UnderConstructionNotice() {
    return (
        <div className='mx-auto max-w-xl rounded-2xl border border-yellow-300/60 bg-yellow-200/10 p-6 text-center'>
            <div className='mb-4 flex justify-center'>
                <Image
                    src={constructionVehicle}
                    alt='Construction vehicle'
                    title='Image credits to StarlyRD'
                    width={256}
                    height={256}
                    className='h-[256px] w-[256px] object-contain'
                />
            </div>
            <p className='text-sm font-medium tracking-wide text-yellow-200'>More coming soon. Work in progress.</p>
        </div>
    );
}
