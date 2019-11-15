let canvas = undefined;
let leading;
function setup() {
  canvas = createCanvas(300, 300);
  canvas.parent("sketch");
  textFont("monospace");
  textAlign(LEFT, CENTER);
  textSize(17);
  leading = textLeading();
}

function draw() {
  background(255);

  text(
    `Key: "${key}"\nKeyCode: "${keyCode}"`,
    width / 4,
    height / 2 - leading / 2,
  );
  // text(, width / 2, height / 2 + leading / 2);
}

function keyPressed() {
  console.log("key", key);
  console.log("keyCode", keyCode);
  // if (key === "s" || key === "S") {
  //   if (canvas === undefined) {
  //     throw new Error("Could not find your canvas");
  //   }
  //   saveCanvas(canvas, "sketch", "png");
  // }
}
