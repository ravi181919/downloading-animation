const h3 = document.querySelector('h3');
const pro = document.querySelector('#pro');

let count = 0;
const set = setInterval(() => {
    if(count === 100){
        h3.style.opacity = 1;
        clearInterval(set);
    }
    count++;
    pro.style.width = count+'%';
}, 50)
