let countValue = 0;

const countWrapper = document.getElementById('counter-value');
countWrapper.innerHTML = countValue;
const minus = document.querySelector('button.minus');
const plus = document.querySelector('button.plus');

const changeCountValue = (e, btn) => {
    e.preventDefault();
    btn.classList.contains('plus') ? countValue++ : countValue--;
    countWrapper.innerHTML = countValue;
}

plus.addEventListener('click', (e) => changeCountValue(e, plus));
minus.addEventListener('click', (e) => changeCountValue(e, minus));