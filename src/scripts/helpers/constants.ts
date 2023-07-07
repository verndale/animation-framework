export type animProps =
  | 'opacity'
  | 'translateY'
  | 'translateX'
  | 'scale'
  | 'rotate'
  | 'skewX'
  | 'skewY'
  | 'transformOrigin'
  | 'blockSize';

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
];

export { animatableProperties };
