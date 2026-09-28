import React from 'react';

import img1 from '@/assets/learing-paths/desing.png';
import img2 from '@/assets/learing-paths/development.png';
import img3 from '@/assets/learing-paths/it.png';
import img4 from '@/assets/learing-paths/bussiness.png';
import img5 from '@/assets/learing-paths/merketting.png';
import img6 from '@/assets/learing-paths/photography.png';
import Image from 'next/image';
const LearningCards = () => {
    return (
        <div className='mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-9'>

            <div className='flex flex-col gap-4 justify-center items-center border py-9 rounded-2xl'>
                <Image
                src={img1}
                alt='design'
                />

                <h1 className='text-xl font-normal'>Design</h1>

            </div>

            <div className='flex flex-col gap-4 justify-center items-center border py-9 rounded-2xl'>
                <Image
                src={img2}
                alt='design'
                />

                <h1 className='text-xl font-normal'>Development</h1>

            </div>

            <div className='flex flex-col gap-4 justify-center items-center border py-9 rounded-2xl'>
                <Image
                src={img3}
                alt='design'
                />

                <h1 className='text-xl font-normal'>IT & Software</h1>

            </div>

            <div className='flex flex-col gap-4 justify-center items-center border py-9 rounded-2xl'>
                <Image
                src={img4}
                alt='design'
                />

                <h1 className='text-xl font-normal'>Bussiness</h1>

            </div>

            <div className='flex flex-col gap-4 justify-center items-center border py-9 rounded-2xl'>
                <Image
                src={img4}
                alt='design'
                />

                <h1 className='text-xl font-normal'>Marketing</h1>

            </div>

            <div className='flex flex-col gap-4 justify-center items-center border py-9 rounded-2xl'>
                <Image
                src={img6}
                alt='design'
                />

                <h1 className='text-xl font-normal'>Photography</h1>

            </div>
        </div>
    );
};

export default LearningCards;