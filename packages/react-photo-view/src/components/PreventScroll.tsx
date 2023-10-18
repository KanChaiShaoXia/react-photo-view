import React, { useEffect } from 'react';

export default function PreventScroll() {
  useEffect(() => {
    const { style } = document.body;
    const lastOverflow = style.overflow;
    style.overflow = 'hidden';

    return () => {
      style.overflow = lastOverflow;
    };
  }, []);

  return (
    <div
      onPointerDown={(e) => e.preventDefault()}
      style={{
        inset: 0,
        position: 'absolute',
      }}
    />
  );
}
