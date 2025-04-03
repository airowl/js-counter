// set btn and counter view

const sectionParent = document.createElement('section');
sectionParent.setAttribute('id', 'counter-body');
sectionParent.classList.add('container');
document.querySelector('main').appendChild(sectionParent);

const topDiv = document.createElement('div');
topDiv.classList.add('row justify-content-center');
sectionParent.appendChild(topDiv);

const divCounter = document.createElement('div');
divCounter.classList.add('col-6');
topDiv.appendChild(divCounter);

const headText = document.createElement('h1');

headText.setAttribute('id', 'counter-value');
headText.classList.add('text-center');



const downDiv = document.createElement('div');


sectionParent.appendChild(document.createElement('div'));
const rows = document.querySelectorAll('section.container div');

const title = document.createElement('div');
const h1 = document.createElement('h1');

//row.add('row justify-content-center');

//sectionParent.innerHTML.push();
console.log(typeof sectionParent);

//let countValue = 0;

//const countWrapper = document.getElementById('counter-value');
//countWrapper.innerHTML = countValue;
//const minus = document.querySelector('button.minus');
//const plus = document.querySelector('button.plus');

//const changeCountValue = (e, btn) => {
//    e.preventDefault();
//    btn.classList.contains('plus') ? countValue++ : countValue--;
//    countWrapper.innerHTML = countValue;
//}

//plus.addEventListener('click', (e) => changeCountValue(e, plus));
//minus.addEventListener('click', (e) => changeCountValue(e, minus));

function elementExists(el){
    const elExist = document.querySelector(el);
    return typeof typeof elExist != null ? true : false;
}