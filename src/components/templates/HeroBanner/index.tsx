import Image from '@components/atoms/Image';
import Typography from '@components/atoms/Typography';
import React from 'react';
import ballImage from '@assets/images/ball-texture.jpg';
import Container from '@components/common/Container';
import useScrollEvent from '@hooks/useScrollEvent';

interface HeroBannerProps {
  title: string;
  title2: string;
  description: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, title2, description }) => {
  const scrollState = useScrollEvent();

  const scrollBallStyle = React.useMemo(() => {
    if (scrollState.scrollY < 100) return '';

    if (scrollState.scrollDirection === 'up' && scrollState.scrollY > 250) {
      return `translate3d(${scrollState.scrollY * 4.25}px,${scrollState.scrollY * 0.3}px,0px) rotate(${
        scrollState.scrollY * 0.8
      }deg)`;
    }

    return `translate3d(${scrollState.scrollY * 2}px,${scrollState.scrollY * 0.3}px,0px) rotate(${
      scrollState.scrollY * 0.5
    }deg)`;
  }, [scrollState]);

  return (
    <div className='t-heroBanner'>
      <Container noPaddingTopBottom noPaddingMobile>
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

        <div
          style={{ transform: scrollBallStyle }}
          className='relative xs:max-w-[300px] sm:max-w-[400px] max-w-[200px] mx-auto z-1 origin-center duration-2000 ease-in-out'
        >
          <Image src={ballImage} />
        </div>

        <div
          style={{ transform: `rotate(${scrollState.scrollY > 100 && scrollState.scrollY < 350 ? 15 : 0}deg)` }}
          className='t-heroBanner_des sm:mt-[-80px] mt-[-40px] w-[88%] rounded-b-full bg-slate-200 mx-auto duration-2000 ease-in-out overflow-hidden sm:pt-[150px] sm:pb-[300px] pt-[100px] pb-[200px]'
        >
          <div className='w-[80%] mx-auto'>
            <Typography type='p' className='font-austin sm:text-5xl text-4xl text-center italic text-gray-800'>
              {description}
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
