import { ReactElement, SVGProps } from 'react';
import ArrowUp from '@assets/icons/ic_arrow_up.svg?r';
import Loading from '@assets/icons/ic_loading.svg?r';

const importedIcons = {
  ArrowUp,
  Loading,
};

type IconName = keyof typeof importedIcons;
type ReactComponent = (props: SVGProps<SVGElement>) => ReactElement;

const Icon = importedIcons as Record<IconName, ReactComponent>;

export default Icon;
