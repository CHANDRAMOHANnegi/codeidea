import { useEffect, useLayoutEffect, useRef } from 'react';

export function LayoutEffectTutorial() {
  const inputRef = useRef<any>(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'Hello';
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        value="Code-idea"
        style={{ width: 300, height: 30 }}
      />
    </div>
  );
}

export default LayoutEffectTutorial;
