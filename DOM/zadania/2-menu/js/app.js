/*
const tab = document.querySelectorAll('.nav-link');


for(let element of tab){
    element.addEventListener('click', elementClicked =>{
        // if there is no action, leave 
        elementClicked.preventDefault();
        tab.forEach(element => {
            element.parentElement.classList.remove('nav-el-active');
        });
        element.parentElement.classList.add('nav-el-active');
    })
}

const tab = document.querySelectorAll('.nav-el');

//inna wersja
for(const element of tab){
    element.addEventListener('click', function(elementClicked){

        // if there is no action, leave 
        elementClicked.preventDefault();
        for(const element1 of tab){
            element1.classList.remove('nav-el-active');
        }
        element.classList.add('nav-el-active');
    })
}
*/

// druga wersja
/*
const elements = document.querySelectorAll('a');

for(let el of elements){
    el.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.nav-el-active').classList.remove('.nav-el-active');
        e.target.classList.add('.nav-el-active'); // target -> element na ktr nacisnelismy
    });
}
*/

// z li
const elements = document.querySelectorAll('li');

for(let el of elements){
    el.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.nav-el-active').classList.remove('nav-el-active');
        e.target.classList.add('nav-el-active'); // target -> element na ktr nacisnelismy
    })
}