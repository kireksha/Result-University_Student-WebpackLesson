import "./index.css";
import MY_IMAGE from './assets/JS_Picture.jpg';
const user = prompt('Как вас зовут?');
console.log('Hello World!');

const hello = (name) => {
    textHTML.innerText = `Dear ${name}, say "hello" to the World!`;
}


const titleHTML = document.createElement('h1');
titleHTML.textContent = 'I love JavaScript';
const pictureJS = document.createElement('img');
pictureJS.src = MY_IMAGE;
document.body.append(titleHTML);
document.body.append(pictureJS);
const textHTML = document.createElement('h2');
document.body.append(textHTML);

hello(user);
