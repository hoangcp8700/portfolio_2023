import Typography from '@components/atoms/Typography';
import Container from '@components/common/Container';
import React from 'react';

interface IntroduceProps {}

const Introduce: React.FC<IntroduceProps> = () => (
  <div className='t-introduce'>
    <Container>
      <div className='rounded-t-full aspect-w-4 aspect-h-3 bg-slate-200 mx-auto overflow-hidden'>
        <div className='sm:pt-[350px] pt-[200px] px-24'>
          <Typography type='p' className='font-austinRoman sm:text-6xl text-xl font-light'>
            Hi there, I’m Hoang.
          </Typography>

          <div className='flex mt-8'>
            <div className='flex-1' />
            <div className='flex-1'>
              <Typography type='p' className='text-2xl text-gray-800'>
                An LA-based award-winning design director and UI/UX design expert with 10 years of experience in design
                and management.
                <br />I am a mom to a beautiful 2 y.o. daughter who already loves attending business meetings with me.
                Also, a big part of my life is Netrix - a design agency which I run together with my husband.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default Introduce;
