export function getRectFromTwoPoints(point1, point2) {
  const leftX = Math.min(point1.x, point2.x);
  const rightX = Math.max(point1.x, point2.x);
  const topY = Math.min(point1.y, point2.y);
  const bottomY = Math.max(point1.y, point2.y);

  const newRectangle = {
    x: leftX,
    y: topY,
    width: rightX - leftX,
    height: bottomY - topY,
  };

  return newRectangle;
}

export function getOffsetCoordinates({ pageCoordinates, referenceCoordinates, width, height }) {
  const origin = { x: referenceCoordinates.pageX - referenceCoordinates.x, y: referenceCoordinates.pageY - referenceCoordinates.y };
  const offset = { x: Math.min(Math.max(0, pageCoordinates.pageX - origin.x), width), y: Math.min(Math.max(0, pageCoordinates.pageY - origin.y), height)};
  return offset;
}
