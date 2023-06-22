export type animProps =
  | 'opacity'
  | 'translateY'
  | 'translateX'
  | 'scale'
  | 'rotate'
  | 'skewX'
  | 'skewY'
  | 'transformOrigin';

const animatableProperties: animProps[] = [
  'opacity',
  'translateX',
  'translateY',
  'scale',
  'rotate',
  'skewX',
  'skewY',
  'transformOrigin'
];

export { animatableProperties };
