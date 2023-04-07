const content = document.getElementById('content');

function makeGrid(rows, cols){
  content.style.setProperty('--grid-rows', rows)
  content.style.setProperty('--grid-cols', cols);
  for(c = 0; c < rows*cols; c++){
    let cell = document.createElement("div");
    content.appendChild(cell).className = "grid-item";
  }
}
makeGrid(16, 16);

