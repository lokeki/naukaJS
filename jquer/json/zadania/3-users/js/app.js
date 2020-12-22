/*document.addEventListener('DOMContentLoaded', async() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const users = await fetch(url)
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));
    console.log(users);

    const userPost = document.querySelector('.user-posts');

    const userList = document.getElementById('usersList')

    for(let user of users){

        const element = document.createElement('div');
        const article = document.createElement('article');
        article.className = 'user-cnt';
        article.setAttribute('data-id', user.id);
        const template = document.querySelector('#templateElement');
        const cloneTemplate = template.content.cloneNode(true);

        const name = cloneTemplate.querySelector('.user-name');
        name.innerText = user.name;

        const phone = cloneTemplate.querySelector('.user-phone');
        phone.innerText = user.phone;

        const email = cloneTemplate.querySelector('.user-email');
        email.innerText = user.email;
        email.setAttribute('href',`mailto: ${user.email}`);

        element.append(template);
        userList.append(element);
    }




});*/

const usersList = document.getElementById("usersList");
const userTemplate = document.getElementById("templateElement");
const postTemplate = document.getElementById("templatePost");
 
(async () => {
    const responseUsers = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await responseUsers.json();
 
    for (const user of users) {
        const userElement = document.createElement("article");
        userElement.classList.add("user-cnt");
        userElement.dataset.id = user.id;
 
        const userContent = userTemplate.content.cloneNode(true);
        userContent.querySelector(".user-name").textContent = user.name;
        userContent.querySelector(".user-phone").textContent = user.phone;
        userContent.querySelector(".user-email").textContent = user.email;
        userContent.querySelector(".user-email").setAttribute("href", `mailto:${user.email}`);
        userContent.querySelector(".user-show-posts").addEventListener("click", async event => {
            if (event.target.textContent.trim() === "Show posts") {
                const responsePosts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
                const posts = await responsePosts.json();
 
                for (const post of posts) {
                    const postElement = document.createElement("li");
                    postElement.classList.add("post");
 
                    const postContent = postTemplate.content.cloneNode(true);
                    postContent.querySelector(".post-title").textContent = post.title;
                    postContent.querySelector(".post-body").textContent = post.body;
 
                    userElement.querySelector(".user-posts").append(postContent);
                }
 
                userElement.querySelector(".user-posts").style.display = "block";
                event.target.textContent = "Hide posts";
            }
            else {
                userElement.querySelector(".user-posts").style.display = "none";
                event.target.textContent = "Show posts";
            }
        });
 
        userElement.append(userContent);
        usersList.append(userElement);
    }
})();