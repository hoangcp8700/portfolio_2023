import CONSTANTS from '@utils/constants';

export const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
];

export const defaultMeta = {
  title: 'React 18 (Typescript) + React-Router 6 + Webpack 5 HMR Boilerplate',
  siteName: 'React 18 (Typescript) + React-Router 6 + Webpack 5 HMR Boilerplate',
  description: '[Webpack 5](https://webpack.js.org/) boilerplate with support of most common loaders and modules',
  keyword: `react, typescript, webpack, babel, HMR, eslint, prettier, stylelint, hygen, Atomic design pattern,
boilerplate`,
  url: CONSTANTS.DOMAIN_CLIENT,
  type: 'website',
  robots: 'follow, index',
  imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  themeColor: '#ffffff',
};
