const first = document.getElementsByClassName('first-attempt');
for(let element of first){
    element.classList.add('active');
}

const elWithDataBorder = document.querySelectorAll('[data-border]');
for(let element of elWithDataBorder){

    element.dataset[`elActive`] = true; //druga opcja
    //element.setAttribute(`data-el-active`, true);
}

const hack = document.getElementsByClassName('hack');
for(let element of hack){
    element.title = 'hacking';
}

const hijack = document.getElementsByClassName('hijack');
for(let element of hijack){
    element.removeAttribute('title');
}

const st = document.querySelectorAll('.st1.st2');
for(let element of st){
    //element.style.color = 'red';
   // element.style['font-size'] = '15px';

    element.style.cssText = 'color: red; font-size: 15px';
}

const attribClass = document.getElementsByClassName('attrib');
for(let element of attribClass){
    element.setAttribute('data-hack-active', true);
    element.removeAttribute('data-hack-inactive');
}

const lastAttempt = document.getElementsByClassName(`last-attempt`);
for(let element of lastAttempt){
    element.querySelectorAll('span').forEach((span) => span.style.display = 'none' )
    console.log(element);
}