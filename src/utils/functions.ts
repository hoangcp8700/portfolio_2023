// *NOTE: mapModifiers('test', abc) => 'test test-abc'
export function mapModifiers(baseClassName: string, ...modifiers: (string | string[] | false | undefined)[]): string {
  return modifiers
    .reduce<string[]>((acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]), [])
    .map((m) => `-${m}`)
    .reduce<string>((classNames, suffix) => `${classNames} ${baseClassName}${suffix}`, baseClassName);
}

// *NOTE: classModifiers('test', abc) => 'test abc'
export function classModifiers(baseClassName: string, ...modifiers: (string | string[] | false | undefined)[]): string {
  const mapClass = modifiers
    .reduce<string[]>((acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]), [])
    .toString()
    .replaceAll(',', ' ');
  return `${baseClassName}${mapClass ? ` ${mapClass}` : ''}`;
}

export function getDimensions(ele: HTMLDivElement) {
  const { height } = ele.getBoundingClientRect();
  const { offsetTop } = ele;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
}

export function baseStr(text?: string) {
  return text || '';
}

export function baseSlug(slug: string) {
  return `/${slug}`;
}

export function renderMoney(val?: number, prefix?: string, unit?: string) {
  const converted = val?.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, prefix || '.');
  return unit ? `${converted} ${unit}` : converted;
}

export const handleScrollXCenter = (ref: React.RefObject<HTMLDivElement | null>, classNameEleActive: string) => {
  const eleScroll = ref.current;
  const eleActive = document.querySelector(classNameEleActive);

  if (!eleActive || !eleScroll) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().width;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().x;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().width;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().x;
  // get position sroll bar
  const positionScroll = eleScroll.scrollLeft;
  const scrollX = xEleActive - xEleScroll + widthEleActive / 2 + positionScroll - widthEleScroll / 2;

  eleScroll.scroll({
    left: scrollX,
    behavior: 'smooth',
  });
};

export const handleScrollYCenter = (ref: React.RefObject<HTMLDivElement | null>, classNameEleActive: string) => {
  const eleScroll = ref.current;
  const eleActive = document.querySelector(classNameEleActive);

  if (!eleActive || !eleScroll) return;

  // get height element scroll
  const heightEleScroll = eleScroll.getBoundingClientRect().height;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().y;
  // get height element active
  const heightEleActive = eleActive.getBoundingClientRect().height;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().y;
  // get position sroll bar
  const positionScroll = eleScroll.scrollTop;
  const scrollX = xEleActive - xEleScroll + heightEleActive / 2 - heightEleScroll / 2;

  let startTime: number;

  const animateScroll = (timeStamp = 0): void => {
    if (!startTime) {
      startTime = timeStamp;
    }
    const escaped = timeStamp - startTime;

    const scrollPercent = scrollX * Math.min(escaped / 400, 1);
    eleScroll.scrollTop = positionScroll + scrollPercent;
    if (escaped < 400) {
      requestAnimationFrame(animateScroll);
    }
  };

  animateScroll();
};

export function removeAccents(str: string) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

export function parseFormatMaskInput(text: string, prefix: string): string {
  if (!text) return '';
  return text.replaceAll(new RegExp(prefix, 'g'), '');
}

// slugify('Hello World!'); // 'hello-world'
export const slugify = (str: string) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export function getKeyValueObject<T>(key: keyof T, object: T) {
  return object[key];
}

// random array
export function getShuffledArr<T>(arr: Array<T>) {
  return [...arr].map((_, i, arrCopy: Array<T>) => {
    const rand = i + Math.floor(Math.random() * (arrCopy.length - i));
    // eslint-disable-next-line no-param-reassign
    [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]];
    return arrCopy[i];
  });
}
export default undefined;
