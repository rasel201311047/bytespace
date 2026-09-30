import type { CSSProperties } from "react";
export const pos = (
  W: number,
  H: number,
  x: number,
  y: number,
  w?: number,
): CSSProperties => ({
  left: `${(x / W) * 100}%`,
  top: `${(y / H) * 100}%`,
  ...(w ? { width: `${(w / W) * 100}%` } : {}),
});
