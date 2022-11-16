
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');

startBtnRef.addEventListener('click', changeBtnColor);
stopBtnRef.addEventListener('click', stopBtnColor);

let intervalId
function changeBtnColor(event){
   intervalId = setInterval(() => {
        console.log(getRandomHexColor)
        document.body.style.backgroundColor = getRandomHexColor();
   }, 1000)
     event.currentTarget.disabled = true;
}

function stopBtnColor() {
    clearInterval(intervalId);
    startBtnRef.disabled = false;
}
 

