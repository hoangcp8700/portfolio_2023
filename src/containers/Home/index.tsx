import React, { useState } from 'react';
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import maleKidImg from '@assets/images/male-kid.png';
import testImage from '@assets/images/test.jpg';
import ArrowIcon from '@assets/icons/ic_arrow_up.svg?r';
import errorDummy from '@assets/dataDummy/error.json';
import hello from '@assets/dataDummy/test.txt';
import './index.scss';
import './index.css';
import Icon from '@components/atoms/Icon';

const HomeContainer: React.FC = () => {
  const [count, setCount] = useState(0);
  console.log('aappp', process.env.REACT_APP_IDENTITY_CLIENT_ID);
  // console.log('ArrowIcon', ArrowIcon);
  return (
    <div className='t-home'>
      <img src={testImage} alt='123' />
      <h1>Hello React - - - - -{count} </h1>
      <div>text: {hello.toString()}</div>
      <hr />
      <div className='t-home-icon'>
        icon:
        <ArrowIcon />
      </div>
      --------------------------
      <Icon.Loading fill='green' stroke='purple' width={100} height={100} />
      ---
      <Button />
      <button type='button' onClick={() => setCount((prev) => prev + 1)}>
        Click
      </button>
      <div className='t-home_json'>json :{JSON.stringify(errorDummy)}</div>
      <Input />
      <img src={maleKidImg} alt='test' />
      <p>{process.env.REACT_APP_IDENTITY_CLIENT_ID}</p>
    </div>
  );
};
export default HomeContainer;
