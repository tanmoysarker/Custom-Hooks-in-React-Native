import { useSyncExternalStore } from 'react';

function UseSyncExternalStore() {
  const width = useSyncExternalStore(
    (listener) => {
      window.addEventListener('resize', listener);
      return () => {
        window.removeEventListener('resize', listener);
      };
    },
    () => window.innerWidth
    // () => -1,
  );

  return <p>Size: {width}</p>;
}

export default UseSyncExternalStore;