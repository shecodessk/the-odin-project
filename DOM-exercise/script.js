const container = document.querySelector('#container');

const content = document.createElement('div');
const innerDiv = document.createElement('div');
const p = document.createElement('p')
const h3 = document.createElement('h3')
const innerP = document.createElement('p')
const innerH1 = document.createElement('h1')




content.textContent = 'This is the glorious text-content!';
p.textContent = 'Hey I\’m red!'
h3.textContent = 'I\’m a blue h3!'

innerP.textContent = 'ME TOO!'
innerH1.textContent = 'I\’m in a div'


p.style.color = 'red';
h3.style.color = 'blue';
innerDiv.style.cssText = 'border:1px solid black; background: pink;'

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(innerDiv);
innerDiv.appendChild(innerH1)
innerDiv.appendChild(innerP)
