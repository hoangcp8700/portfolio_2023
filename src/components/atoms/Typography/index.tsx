import React from 'react';

interface TypographyProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  content?: string;
  children?: React.ReactNode;
  className?: string;
}
const Typography: React.FC<TypographyProps> = ({ type = 'h2', children, content, className }) => {
  const Element = type;

  return content ? (
    <Element className={className} dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    <Element className={className}>{children}</Element>
  );
};

export default Typography;
