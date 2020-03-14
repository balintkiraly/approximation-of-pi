import * as p5 from "p5";

const canvasWidth = 640;
const canvasHeight = canvasWidth;
const cirecleRadius = Math.floor(Math.min(canvasWidth, canvasHeight) / 2);
const origoX = Math.floor(canvasWidth / 2);
const origoY = Math.floor(canvasHeight / 2);

let inside = 0;
let outside = 0;

const options = p5 => {
  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);
  };

  p5.draw = () => {
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;

      const d = Math.sqrt(Math.pow(x - origoX, 2) + Math.pow(y - origoY, 2));

      if (cirecleRadius > d) {
        inside++;
        p5.stroke(0, 255, 0);
      } else {
        outside++;
        p5.stroke(255, 200, 200);
      }
      p5.strokeWeight(2);
      p5.point(x, y, 10);
    }
    console.log("value of PI: ", 4 * (inside / (outside + inside)));
  };
};

export const P5 = new p5(options);
