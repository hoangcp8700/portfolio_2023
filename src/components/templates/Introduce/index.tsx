import Typography from '@components/atoms/Typography';
import Container from '@components/common/Container';
import TagTitle from '@components/molecules/TagTitle';
import React from 'react';

interface IntroduceProps {}

const Introduce: React.FC<IntroduceProps> = () => (
  <div className='t-introduce'>
    <Container noPaddingMobile>
      <div className='rounded-t-full bg-slate-200 mx-auto overflow-hidden'>
        <div className='sm:pt-[70vh] pt-[40vh] pb-8 sm:px-24 px-8'>
          <Typography type='p' className='font-austin sm:text-6xl text-4xl font-light'>
            Hi there, I’m Hoang.
          </Typography>

          <div className='flex md:flex-row flex-col sm:mt-6 mt-4'>
            <div className='flex-1'>
              <TagTitle content='Introduce' href='#introduce' />
            </div>
            <div className='flex-1 md:mt-0 sm:mt-6 mt-4'>
              <Typography type='p' className='font-light sm:text-xl md:text-2xl text-lg text-gray-800'>
                An LA-based award-winning design director and UI/UX design expert with 10 years of experience in design
                and management.
                <br />
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
