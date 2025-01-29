const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");

const brushColorPicker = document.getElementById("brush-color");
const brushSizeSlider = document.getElementById("brush-size");
const backgroundColorPicker = document.getElementById("background-color");
const undoButton = document.getElementById("undo-btn");
const clearButton = document.getElementById("clear-btn");
const saveButton = document.getElementById("save-btn");

canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.6;

// Variables
let isDrawing = false;
let brushColor = "#000000";
let brushSize = 5;
let backgroundColor = "#ffffff";
let drawingHistory = [];
let currentDrawing = [];

// Initialize the canvas
ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Event listeners for canvas
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Drawing functions
function startDrawing(e) {
  isDrawing = true;
  currentDrawing = [];
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
}

function draw(e) {
  if (!isDrawing) return;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = brushColor;
  ctx.lineWidth = brushSize;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();

  currentDrawing.push({ x: e.offsetX, y: e.offsetY, color: brushColor, size: brushSize });
}

function stopDrawing() {
  if (!isDrawing) return;

  isDrawing = false;
  ctx.closePath();
  if (currentDrawing.length) {
    drawingHistory.push([...currentDrawing]);
  }
}

// Brush settings
brushColorPicker.addEventListener("input", (e) => {
  brushColor = e.target.value;
});

brushSizeSlider.addEventListener("input", (e) => {
  brushSize = e.target.value;
});

// Background color
backgroundColorPicker.addEventListener("input", (e) => {
  backgroundColor = e.target.value;
  redrawCanvas();
});

// Undo functionality
undoButton.addEventListener("click", () => {
  if (drawingHistory.length > 0) {
    drawingHistory.pop();
    redrawCanvas();
  }
});

// Clear canvas
clearButton.addEventListener("click", () => {
  drawingHistory = [];
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// Save canvas as an image
saveButton.addEventListener("click", () => {
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = image;
  link.download = "drawing.png";
  link.click();
});

// Redraw canvas based on history
function redrawCanvas() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawingHistory.forEach((stroke) => {
    ctx.beginPath();
    for (let i = 0; i < stroke.length; i++) {
      const point = stroke[i];
      ctx.strokeStyle = point.color;
      ctx.lineWidth = point.size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }
    ctx.stroke();
    ctx.closePath();
  });
}
