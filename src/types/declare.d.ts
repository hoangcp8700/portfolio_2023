declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.txt';
declare module '*.svg';
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

// declare module '*.svg' {
//   const src: string;
//   export default src;
// }
declare module '*.svg?r' {
  const content: React.ElementType<React.ComponentPropsWithRef<'svg'>>;
  export default content;
}
// declare module '*.svg?r' {
//   import { ReactElement, SVGProps } from 'react';

//   const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
//   export { ReactComponent };
// }
// declare module '*.svg?r' {
//   import React from 'react';

//   const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare module '*.json' {
  const content: Record<string, string>;
  export default content;
}
