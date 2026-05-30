import { css } from "styled-system/css";

const circles: [number, number][] = [
  [0, 0],
  [0, 112],
  [0, 224],
  [60, 52],
  [60, 164],
  [60, 276],
  [120, 0],
  [120, 112],
  [120, 224],
  [180, 52],
  [180, 164],
  [180, 276],
  [240, 0],
  [240, 112],
  [240, 224],
  [300, 52],
  [300, 164],
  [300, 276],
  [360, 0],
  [360, 112],
  [360, 224],
  [420, 52],
  [420, 164],
  [420, 276],
  [480, 0],
  [480, 112],
  [480, 224],
  [542, 52],
  [542, 164],
  [542, 276],
  [602, 0],
  [602, 112],
  [602, 224],
  [664, 52],
  [664, 164],
  [664, 276],
  [722, 0],
  [722, 112],
  [722, 224],
  [784, 52],
  [784, 164],
  [784, 276],
];

export function FvGraphic() {
  return (
    <svg
      viewBox="0 0 768 260"
      width={768}
      height={260}
      aria-hidden="true"
      className={css({
        display: "block",
        width: "100%",
        height: "auto",
        color: "bg",
        borderRadius: "md",
        overflow: "hidden",
      })}
    >
      <g clipPath="url(#fv-clip)">
        <rect width={768} height={260} fill="currentColor" />
        {circles.map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={52}
            fill="#0064CA"
            stroke="currentColor"
            strokeWidth={16}
          />
        ))}
      </g>
      <defs>
        <clipPath id="fv-clip">
          <rect width={768} height={260} />
        </clipPath>
      </defs>
    </svg>
  );
}
