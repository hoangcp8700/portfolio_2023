import Typography from '@components/atoms/Typography';
import React from 'react';

interface TagTitleProps {
  content: string;
  href: string;
}

const TagTitle: React.FC<TagTitleProps> = ({ content, href }) => (
  <a href={href}>
    <div className='rounded-full w-fit sm:py-2 py-1 sm:px-8 px-5 border border-gray-800'>
      <Typography className='font-austin sm:text-2xl text-xl font-medium text-gray-800'>{content}</Typography>
    </div>
  </a>
);

export default TagTitle;
