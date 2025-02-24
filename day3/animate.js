var timer;

let start = () => {
  timer = setInterval(() => {
    //   let bodyElement = document.getElementById("htmlBody");
    //   bodyElement.style.backgroundColor = "blue";
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  }, 1000);
};
let stop = () => {
  clearInterval(timer);
};
