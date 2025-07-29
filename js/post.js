// console.log("fetching...");

function loadposts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(post) {
  //  console.log(post);

  const postContainer = document.getElementById("post-container");
  for (const posts of post) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `<h4>User - ${posts.userId}</h4>
        <h3>post: title ${posts.title}</h3>
        <p>post description  ${posts.body}</p>
        `;
    postContainer.appendChild(div);
  }
}
loadposts();
