import React from 'react';
import clsx from 'clsx';

export type Ratio = string;

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  classNameWrapper?: string;
  ratio?: Ratio;
  srcMobile?: string;
  srcTablet?: string;
  sizes?: 'object-cover' | 'object-contain' | 'object-fill' | 'object-none';
};

const Image: React.FC<ImageProps> = ({
  src = '',
  srcMobile = undefined,
  srcTablet = undefined,
  alt = 'replacing',
  ratio = 'aspect-w-1 aspect-h-1',
  loading = 'lazy',
  sizes = 'object-cover',
  classNameWrapper,
  className,
  ...props
}) => (
  <div className={clsx('relative block overflow-hidden w-full', ratio, classNameWrapper)}>
    <picture>
      <source media='(min-width:1024px)' srcSet={src} />
      {srcTablet && <source media='(min-width:768px)' srcSet={srcTablet} />}
      {srcMobile && <source media='(max-width:767px)' srcSet={srcMobile} />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={clsx(
          'absolute h-full w-full left-0 top-0 object-cover transition ease-in-out duration-300',
          sizes,
          className,
        )}
        {...props}
      />
    </picture>
  </div>
);

export default React.memo(Image);
