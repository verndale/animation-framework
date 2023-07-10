import 'focus-visible';
import create from '@verndale/core';
import modules from './modules';
import '../../lib/scroll-animations';
import { IconButtonAnimation } from '../../lib/active-state-animations/components/button-animations';

const isStorybook = !!document.getElementById('storybook-root');
const body = document.querySelector('body') as HTMLBodyElement;

document.addEventListener(
  'DOMContentLoaded',
  async () => {
    if (!body.dataset.modulesLoaded || isStorybook) {
      create(modules).then(() => {
        body.dataset.modulesLoaded = 'true';
        IconButtonAnimation();
      });
    }
  },
  false
);
