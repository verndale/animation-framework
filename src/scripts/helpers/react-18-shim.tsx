import React, { FC, ReactElement, useLayoutEffect, useRef } from 'react';
import ReactDOM, { Root as ReactRoot } from 'react-dom/client';

const nodes = new Map<Element, ReactRoot>();

const WithCallback: FC<{ callback: () => void; children: ReactElement }> = ({
  callback,
  children
}) => {
  const once = useRef<() => void>();
  useLayoutEffect(() => {
    if (once.current === callback) return;
    once.current = callback;
    callback();
  }, [callback]);

  return children;
};

const getReactRoot = async (el: Element): Promise<ReactRoot | null> => {
  let root = nodes.get(el);

  if (!root) {
    root = ReactDOM.createRoot(el);
    nodes.set(el, root);
  }

  return root;
};

export const renderElement = async (node: ReactElement, el: Element) => {
  // Create Root Element conditionally for new React 18 Root Api
  const root = await getReactRoot(el);

  return new Promise(resolve => {
    root?.render(<WithCallback callback={() => resolve(null)}>{node}</WithCallback>);
  });
};
