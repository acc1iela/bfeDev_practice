import React, { useEffect, useRef, EffectCallback, DependencyList } from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  // your code here
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      return effect();
    }
  }, deps);
}

// to try your code on the right panel
// export App() component like below

// export function App() {
//   ...
//   return <div>BFE.dev</div>
// }
