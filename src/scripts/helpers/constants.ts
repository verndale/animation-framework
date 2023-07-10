export type animProps =
  | 'opacity'
  | 'translateY'
  | 'translateX'
  | 'scale'
  | 'rotate'
  | 'skewX'
  | 'skewY'
  | 'transformOrigin'
  | 'blockSize'
  | 'maxBlockSize';

const animatableProperties: animProps[] = [
  'opacity',
  'translateX',
  'translateY',
  'scale',
  'rotate',
  'skewX',
  'skewY',
  'transformOrigin',
  'blockSize',
  'maxBlockSize'
];

export { animatableProperties };
