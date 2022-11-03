function getRandomHexColor() {
  const randomaizer = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

   
  return randomaizer
 
}
const changeButton = document.querySelector('button.change-color')
const body = document.querySelector('body')
const colorValue = document.querySelector('span.color')


changeButton.addEventListener('click', e => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
})