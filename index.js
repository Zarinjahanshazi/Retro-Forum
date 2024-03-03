function loadPost(){
    fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`)
    .then(res => res.json())
    .then(data => displayPost(data.posts))
}
function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        //console.log(post)
        postDiv.classList = `card w-auto bg-red-100 m-4 p-4`;
        postDiv.innerHTML = `
        <p>#${post.category}<span class="ml-4">Author: ${post.author.name}</span></p>
        <h2 class="${post.category}">${post.title}</h2>
        <p>${post.description}</p>
        
        `;
        postContainer.appendChild(postDiv);
    }
}
loadPost();