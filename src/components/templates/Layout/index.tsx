import clsx from 'clsx';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const LineBackground: React.FC<{ className?: string }> = ({ className }) => (
  <div className={clsx('h-full fixed top-0 flex', className)}>
    {new Array(12).fill(true).map((_, idx) => (
      <div className='w-[0.25px] h-full bg-white rounded-1 ml-3' key={`line-${idx.toString()}`} />
    ))}
  </div>
);

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <LineBackground className='left-0' />
    <main>{children}</main>
    <LineBackground className='right-0' />
  </div>
);

export default Layout;