// import React from 'react';
// import { renderElement } from './helpers/react-18-shim';
import type { Organism } from '@verndale/core';
import globModules from './glob-modules';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const reactModule = (Component: any, nodeList: NodeListOf<HTMLElement>) => {
//   return nodeList.forEach(node => {
//     renderElement(<Component {...node.dataset} />, node);
//   });
// };

const modules: Organism[] = [
  {
    name: 'accordion',
    loader: () => import('./modules/accordion')
  },
  {
    name: 'navigation',
    loader: () => import('./modules/navigation'),
    styles: () => import('../scss/modules/navigation.scss')
  }
];

export default [...globModules, ...modules];
