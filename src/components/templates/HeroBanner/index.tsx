import Image from '@components/atoms/Image';
import Typography from '@components/atoms/Typography';
import React from 'react';
import ballImage from '@assets/images/ball-texture.jpg';
import Container from '@components/common/Container';

interface HeroBannerProps {
  title: string;
  title2: string;
  description: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, title2, description }) => (
  <div className='t-heroBanner'>
    <Container>
      <div className='t-heroBanner_title sm:h-[40vh] h-[30vh] relative'>
        <div className='absolute top-[80%] xs:left-[50%] left-0 xs:translate-x-[-50%] translate-y-[-50%] z-2'>
          <Typography type='p' className='xs:text-8xl sm:text-9xl text-7xl font-medium font-austin italic'>
            <Typography type='span' className='block'>
              {title}
            </Typography>
            <Typography type='span' className='xs:whitespace-nowrap sm:ml-100'>
              {title2}
            </Typography>
          </Typography>
        </div>
      </div>

      <div className='relative xs:max-w-[300px] sm:max-w-[400px] max-w-[200px] mx-auto z-1 duration-300 ease-in-out'>
        <Image src={ballImage} />
      </div>

      <div className='t-heroBanner_des sm:mt-[-80px] mt-[-40px] sm:max-w-[88%] rounded-b-full aspect-w-2 aspect-h-1 bg-slate-200 mx-auto duration-300 ease-in-out overflow-hidden'>
        <div className='w-full sm:max-w-[700px] mx-auto sm:pt-[160px] pt-[80px] px-10'>
          <Typography type='p' className='font-austin sm:text-5xl text-xl text-center italic text-gray-800'>
            {description}
          </Typography>
        </div>
      </div>
    </Container>
  </div>
);

export default HeroBanner;
