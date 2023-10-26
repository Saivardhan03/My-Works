// Get the editor div
const editor = document.getElementById("editor");

// Function to add text
function addText() {
  const text = prompt("Enter your text:");
  if (text) {
    const p = document.createElement("p");
    p.textContent = text;
    editor.appendChild(p);
  }
}

// Function to add an image
function addImage() {
  const imageUrl = prompt("Enter image URL:");
  if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    editor.appendChild(img);
  }
}

// Function to add a video
function addVideo() {
  const videoUrl = prompt("Enter video URL:");
  if (videoUrl) {
    const video = document.createElement("iframe");
    video.src = videoUrl;
    video.width = "560";
    video.height = "315";
    editor.appendChild(video);
  }
}

// Attach button click events
document.getElementById("addText").addEventListener("click", addText);
document.getElementById("addImage").addEventListener("click", addImage);
document.getElementById("addVideo").addEventListener("click", addVideo);