const map = L.map('mapid').setView([51.919437, 19.145136], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoia2FydG9mZWxlazAwNyIsImEiOiJjanRpazhyM2owbHUwNDluem40Ynljdm5hIn0.kYoJkNni5ksRyA0gy1yV7A'
}).addTo(map);

/*----------------------------------------------------
 !!! powyzszego nie ruszaj, to mapa wstawiona za pomocą leafletjs
 wzorowana na tutorialu ze strony: https://leafletjs.com/examples/quick-start/
 Skrypt pisz poniżej
 ----------------------------------------------------*/

document.addEventListener('DOMContentLoaded', async() => {
    
    const select = document.querySelector('#countrySelect');

    async function loadData(){

        let data = await fetch('https://restcountries.eu/rest/v2/all?fields=iso2Code;name')
        .then(reap => reap.json())
        .then(reap => reap);

        for(let el of data){

            const option = document.createElement('option');

            option.innerText = el.name;
            option.value = el.name;
            select.appendChild(option);

        }
        select.disabled = false;

        console.log(data)
    }

    await loadData();

    select.addEventListener('change', async () => {
        const value = select.value;
        const countryData = await loadCauntryData(value);
        const country = countryData[0];
        const countryDataEl = document.querySelector('#countryData');
        countryDataEl.innerHTML = `<h3>${country.name}</h3> <div>${country.capital}</div>`
        const flag = document.querySelector('#countryFlag');
        flag.src = country.flag;

    })

    async function loadCauntryData(value){
        const countryData = await fetch(`https://restcountries.eu/rest/v2/name/${value}`)
        .then(rep => rep.json())

        //console.log(countryData);
        return countryData;
    }

})
