document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#searchForm');
    const input = document.querySelector('#search');

    /*form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value}`)
        .then(res => res.json()) // zamieniamy wartosc na json
        .then(res => console.log(res))
    })

    
// to samo z jquery */

    form.addEventListener('submit', e => {
        e.preventDefault();
        
    })

})

/*inne
document.getElementById("searchForm").addEventListener("submit", async event => {
    event.preventDefault();

    const fields = Object.fromEntries(new FormData(event.target));
    console.log(fields);

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${fields.query}`);
    const json = await response.json();

    console.table(json);
});
*/


