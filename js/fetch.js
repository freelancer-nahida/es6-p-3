// console.log("ghfhfjmj");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const url = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(url)
//   .then((pro) => pro.json())
//   .then((json) => console.log(json));

// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

function displayUsers(users) {
  // console.log(user.email);

  const ul = document.getElementById("users-list");
  for (const user of users) {
    const li = document.createElement("li");
    li.innerText = user.email;
    ul.appendChild(li);
  }
}

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
