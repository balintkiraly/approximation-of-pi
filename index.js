const canvasWidth = 640;
const canvasHeight = canvasWidth;

setup = () => {
  createCanvas(canvasWidth, canvasHeight);
};

draw = () => {
  const cirecleSize = min(canvasWidth, canvasHeight) - 50;
  fill(255, 200, 200);
  stroke(127, 0, 0);
  ellipse(canvasWidth / 2, canvasHeight / 2, cirecleSize, cirecleSize);
};
