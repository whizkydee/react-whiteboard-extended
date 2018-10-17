const line = (pointA, pointB) => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
};

const controlPoint = (current, previous, next, reverse) => {
  const p = previous || current;
  const n = next || current;
  const smoothing = 0.2;
  const o = line(p, n);
  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
};

const toCubicBezier = (point, i, a) => {
  const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point);
  const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true);
  return `C ${cpsX}, ${cpsY} ${cpeX}, ${cpeY} ${point[0]}, ${point[1]}`;
};

export default function smoothPath(points, callback = toCubicBezier) {
  // build the 'd' attribute by looping over the points
  return points.reduce(
    (acc, point, i, a) =>
      i === 0
        ? // if first point
          `M ${point[0]}, ${point[1]}`
        : // else
          `${acc} ${callback(point, i, a)}`,
    ''
  );
};
